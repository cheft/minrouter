var router = require('../src/minrouter')

// http://localhost:3000/hello/cheft?name=chenhaifeng
router.get('/hello/:name', function(req, res) {
  res.view('Hello: ' + req.params.name + ', ' + req.query.name)
})

// http://localhost:3000/open/pictures/girl.png
router.get('/open/:document/:file', function(req, res) {
  res.view('opening file:' + req.params.document + '/' + req.params.file)
})

// http://localhost:3000/pages/p1990
router.get('/pages/p:page', function(req, res) {
  res.view('book\'s page is:' + req.params.page)
})

// http://localhost:3000/files/public/assets/index.css
router.get('/files/*path', function(req, res) {
  res.view('files path:' + req.params.path)
})

module.exports = router
