/**
 * 暂时只支持 get 方式，负责页面渲染和跳转
 * koa 如果要做 api 服务器，还是用 koa-router
 * 两种参数：path 通配符的存入 req.params 中；问号传参的存入 req.query 中
 */
var regexps = [
  /[\-{}\[\]+?.,\\\^$|#\s]/g,
  /\((.*?)\)/g,
  /(\(\?)?:\w+/g,
  /\*\w+/g,
]

function extractRoute (route) {
  var matchs = []
  route = route.replace(regexps[0], '\\$&')
    .replace(regexps[1], '(?:$1)?')
    .replace(regexps[2], function (match, optional) {
      if (match) matchs.push(match.replace(':', ''))
      return optional ? match : '([^/?]+)'
    }).replace(regexps[3], function (match, optional) {
      if (match) matchs.push(match.replace('*', ''))
      return '([^?]*?)'
    })
  return {
    regexp: new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$'),
    matchs: matchs
  }
}

function extractParams (route, path) {
  var params = route.exec(path).slice(1)
  var results = []
  for (var i = 0; i < params.length; i++) {
    results.push(decodeURIComponent(params[i]) || null)
  }
  return results
}

// borwser
function extractParamsQuery() {
  var url = location.search
  var pattern = /(\w+)=([^\?|^\&]+)/ig
  var query = {}
  url.replace(pattern, function(a, b, c) {
    query[b] = c;
  })
  return query;
}

function exec() {
  for (var i = 0; i < data.routes.length; i++) {
    var route = extractRoute(data.routes[i].path);
    if (!route.regexp.test(data.req.path)) {
      continue
    }
    var results = extractParams(route.regexp, data.req.path)
    data.req.params = data.req.params || {}
    for (var j = 0; j < route.matchs.length; j++) {
      data.req.params[route.matchs[j]] = results[j]
    }
    data.routes[i].action.call(data, data.req, data.res, data.next)
  }
}

// borwser
function emit(event) {
  if (data.req.path === location.pathname) return
  data.req.path = location.pathname
  data.req.query = extractParamsQuery()
  exec()
}

var data = {routes: [], resMethods: {}}
function Router(req, res, next) {
  if (typeof document === 'object') { // browser
    data.env = 'browser'
    data.req = {query: {}}
    data.res = {}
    window.addEventListener('popstate', emit, false)
  }else if (next) { // express
    data.req = req
    data.res = res
    data.next = next
    data.env = 'express'
  } else { // koa
    data.ctx = req
    data.req = data.ctx.request
    data.req.path = data.req.url
    data.res = data.ctx.response
    data.next = res
    data.env = 'koa'
  }
  for (var m in data.resMethods) {
    data.res[m] = data.resMethods[m].bind(data)
  }
  if (data.env !== 'browser') exec()
}

Router.get = function(path, action) {
  data.routes.push({ path: path, action: action })
}

Router.addResMethod = function(key, fn) {
  data.resMethods[key] = fn
}

/**
 * browser
 * 需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件，
 * 只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）
 */
Router.go = function(uri, isReplace) {
  if (isReplace)  {
    history.replaceState({ path: uri }, '', uri);
  } else {
    history.pushState({ path: uri }, null, uri);
  }
  emit()
}

// browser
Router.back = function() {
  history.back()
}

// browser, 代理链接功能
Router.proxyLinks = function(doms) {
  for (var i = 0; i < doms.length; i++) {
    doms[i].addEventListener('click', function(e) {
      Router.go(e.target.href)
      e.preventDefault()
    })
  }
}

// browser
Router.destroy = function() {
  window.removeEventListener('popstate', emit, false)
}

module.exports = Router
