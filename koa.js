var koa = require('koa')
var app = new koa()

var router = require('./minrouter')()

// http://localhost:4000
router.get('/', function(ctx, next) {
	var req = ctx.request
	ctx.body = 'Hello World'
})

// http://localhost:4000/users?name=cheft
router.get('/users', function(ctx, next) {
	var req = ctx.request
	ctx.body = 'Hello , ' + req.query.name
})

// http://localhost:4000/users/cheft/027
router.get('/users/:id/0:age', function(ctx, next) {
	var req = ctx.request
	ctx.body = 'Hello Users, ' + req.params.id + ', ' + req.params.age
})

// http://localhost:4000/users/name/cheft/chenhaifeng/hifsion
router.get('/users/name/*name', function(ctx, next) {
	var req = ctx.request
	ctx.body = 'Hello Users, ' + req.params.name
})

app.use(router)

app.listen(4000, function(err) {
  console.log('> Ready on http://localhost:4000')
})
