var fs = require('fs')
var express = require('express')
var app = express();

var router = require('./routes')

router.addResMethod('view', function(content) {
  console.log(content)
  var html = fs.readFileSync(__dirname + '/index.html')
  this.res.send(html.toString().replace('<h3 id="content"></h3>',
    '<h3 id="content">' + content + '</h3>'))
})

router.get('/browser.bundle.js', function() {
  this.res.send(fs.readFileSync(__dirname + '/browser.bundle.js').toString())
})

app.use('/', router)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
