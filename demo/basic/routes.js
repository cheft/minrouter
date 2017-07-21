var router = require('../../src/minrouter')

router.get('/', function(req, res) {
  res.view('Hello MinRouter')
})

router.get('/hello/:name', function(req, res)   {
  console.log(req.url, req.path)
  res.view('Hello: ' + req.params.name + ', ' + req.query.name)
})

router.get('/open/:document/:file', function(req, res) {
  res.view('opening file:' + req.params.document + '/' + req.params.file)
})

router.get('/pages/p:page', function(req, res) {
  res.view('book\'s page is:' + req.params.page)
})

router.get('/files/*path', function(req, res) {
  res.view('files path:' + req.params.path)
})

module.exports = router
