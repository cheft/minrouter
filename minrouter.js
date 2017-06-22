// koa
// app.use(function(ctx, next) {
// 	// ctx.req, ctx.res 是原生 node 的两个对象，下面两个是 koa 的
//   console.log(ctx.request, ctx.response)
// })

// // express
// app.use(function(req, res, next) {
//   console.log(req, res, next)
// })

/**
* 暂时只支持 get 方式，负责页面渲染和跳转
* koa 如果要做 api 服务器，还是用 koa-router
* 两种参数：path 通配符的存入 req.params 中；问号传参的存入 req.query 中
*/
function MinRouter() {
	return Router
}

var regexps = [
    /[\-{}\[\]+?.,\\\^$|#\s]/g,
    /\((.*?)\)/g,
    /(\(\?)?:\w+/g,
    /\*\w+/g,
],
extractRoute = function(route) {
	var matchs = []
  route = route.replace(regexps[0], '\\$&')
    .replace(regexps[1], '(?:$1)?')
    .replace(regexps[2], function(match, optional) {
    	if (match) matchs.push(match.replace(':', ''))
      return optional ? match : '([^/?]+)'
    }).replace(regexps[3], function(match, optional) {
    	if (match) matchs.push(match.replace('*', ''))
    	return '([^?]*?)'
    })
  return {regexp: new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$'), matchs: matchs}
},

extractParams = function(route, path) {
	var params = route.exec(path).slice(1)
	var results = [], i
	for(i = 0; i < params.length; i++) {
	  results.push(decodeURIComponent(params[i]) || null)
	}
	return results
};

function Router(req, res, next) {
	if (next) { // express
		this.req = req
		this.res = res
		this.next = next
		this.env = 'express'
	} else { // koa
		this.ctx = req
		this.req = this.ctx.request
		this.res = this.ctx.response
		this.next = res
		this.env = 'koa'
		console.log(this.req)
	}
	console.log(this.ctx.request)
	if (typeof document === 'object') this.env = 'browser'

	for(var i = 0; i < Router.routes.length; i++) {
    var route = extractRoute(Router.routes[i].path);
    // express: req.path, koa: req.url
    var path = this.req.path || this.req.url
    if (!route.regexp.test(path)) {
        continue;
    }
    var results = extractParams(route.regexp, path)

    this.req.params = this.req.params || {}

    for (var j = 0; j < route.matchs.length; j++) {
    	this.req.params[route.matchs[j]] = results[j]
    }
    if (this.env === 'express') {
    	Router.routes[i].action.call(this, this.req, this.res, this.next)
    } else if (this.env === 'koa') {
    	Router.routes[i].action.call(this.ctx, this.ctx, this.next)
    } else if (this.env === 'browser') {
    	// :TODO
    	Router.routes[i].action.call(this.ctx, this.ctx, this.next)
    }
	}
}

Router.routes = []

Router.get = function(path, action) {
	Router.routes.push({path: path, action: action})
}

function Request(req) {
	this.params = req.params
	this.query = req.query
}

function Response() {
	
}

Response.prototype.render = function(view, data) {

}

Response.prototype.redirect = function(uri, isReplace) {
	if (uri === 'back') {
		return history.back()
	}

	if (isReplace) {
		return history.replaceState({path: uri}, document.title, uri);
	}
	history.pushState({path: uri}, document.title, uri);
}

module.exports = MinRouter
