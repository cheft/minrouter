var express = require('express');
var app = express();

var router = require('./routes')

app.use('/', router)

router.addResMethod('view', function(content) {
  console.log(content)
  this.res.send(content)
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
