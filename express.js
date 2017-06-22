var express = require('express');
var app = express();

var router = require('./minrouter')()

// http://localhost:3000
app.get('/', function (req, res) {
  res.send('Hello World!');
});


// http://localhost:3000/users?name=cheft
router.get('/users', function(req, res, next) {
	res.send('Hello , ' + req.query.name)
})

// http://localhost:3000/users/cheft/027
router.get('/users/:id/0:age', function(req, res, next) {
	res.send('Hello Users, ' + req.params.id + ', ' + req.params.age)
})

// http://localhost:3000/users/name/cheft/chenhaifeng/hifsion
router.get('/users/name/*name', function(req, res, next) {
	res.send('Hello Users, ' + req.params.name)
})

app.use('/', router)

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
