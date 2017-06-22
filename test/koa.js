var koa = require('koa')
var app = new koa()

var router = require('./routes')

router.addResMethod('view', function(content) {
  console.log(content)
  this.ctx.body = content
})

app.use(router)

app.listen(3000, function(err) {
  console.log('> Ready on http://localhost:3000')
})
