var fs = require('fs')
var koa = require('koa')
var app = new koa()

var router = require('./routes')

router.addResMethod('view', function(content) {
  console.log(content)
  var html = fs.readFileSync(__dirname + '/index.html')
  this.ctx.body = html.toString().replace('<h3 id="content"></h3>',
    '<h3 id="content">' + content + '</h3>')
})

router.get('/browser.bundle.js', function() {
  this.ctx.body = fs.readFileSync(__dirname + '/browser.bundle.js').toString()
})

app.use(router)

app.listen(4000, function(err) {
  console.log('> Ready on http://localhost:4000')
})
