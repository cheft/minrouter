;(function() {
	if(!window) return;
	var win = window, evt = 'pushState' in history ? 'popstate' : 'hashchange';

	var regexps = [
		/[\-{}\[\]+?.,\\\^$|#\s]/g,
		/\((.*?)\)/g,
		/(\(\?)?:\w+/g,
		/\*\w+/g,
	],
	getRegExp = function(route) {
		route = route.replace(regexps[0], '\\$&')
			.replace(regexps[1], '(?:$1)?')
			.replace(regexps[2], function(match, optional) {
				return optional ? match : '([^/?]+)'
			}).replace(regexps[3], '([^?]*?)');
		return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	},
	extractParams = function(route, fragment) {
		var params = route.exec(fragment).slice(1);
		var results = [], i;
		for(i = 0; i < params.length; i++) {
			results.push(decodeURIComponent(params[i]) || null);
		}
		return results;
	};

	function Router(opts, sep) {
		this.routes = opts.routes;
		this.opts = opts;
		this.sep = sep || '';
		if(this.sep === '/') {
			var self = this;
			win.onload = function() {
				self.exec(location.pathname);
			};
		}
	}

	Router.prototype.exec = function(path) {
		for(var r in this.routes) {
		    var route = getRegExp(r);
		    if (!route.test(path)) {
		    	continue;
		    }
		    if (typeof this.routes[r] === 'function') {
		    	this.routes[r].apply(this, extractParams(route, path));
		    } else {
		    	var fn = this.opts[this.routes[r]];
		      	fn ? fn.apply(this, extractParams(route, path)) : void 0;
		    }
		}
	};

	Router.prototype.start = function() {
		win.addEventListener ? win.addEventListener(evt, this.exec, false) : win.attachEvent('on' + evt, this.exec)
	};

	Router.prototype.stop = function() {
		win.removeEventListener ? win.removeEventListener(evt, this.exec, false) : win.detachEvent('on' + evt, this.exec);
	};

	Router.prototype.go = function(e) {
		if(!e) return;
		var browserRefresh = false;
		var path = e.srcElement.pathname;
		if('pushState' in history) {
			history.pushState({state: path}, document.title, path);
			this.exec(path);
		}else {
			if(this.sep === '/') {
				browserRefresh = true;
			}else {
				location.hash =  this.sep + path;
				this.exec('/' + path);
			}
		}
		if(e && e.preventDefault) {
			e.preventDefault();      
		}else {
			if(!browserRefresh) {
				e.returnValue = false;              
		 		return false; 
			}
		}
	};

	Router.prototype.back = function() {
		history.back();
	};

	if(typeof exports === 'object') {
		module.exports = Router;
	}else if(typeof define === 'function' && define.amd) {
		define(function() { return window.MinRouter = Router; })
	}else {
		window.MinRouter = Router;
	}
})(typeof window != 'undefined' ? window : undefined);