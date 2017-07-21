var fs = require('fs')
var koa = require('koa')
var app = new koa()

require("babel-polyfill");
require('babel-core/register')

var ssr = require('./ssr')

var router = require('./routes')

router.addResMethod('view', function(component) {
  var html = fs.readFileSync(__dirname + '/template.html')
  this.ctx.body = html.toString().replace('<div id="app"></div>',
    '<div id="app">' + ssr(component) + '</div>')
})

router.get('/client.bundle.js', function() {
  this.ctx.body = fs.readFileSync(__dirname + '/client.bundle.js').toString()
})

app.use(router)

app.listen(4000, function(err) {
  console.log('> Ready on http://localhost:4000')
})
