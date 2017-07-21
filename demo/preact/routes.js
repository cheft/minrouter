var router = require('../../src/minrouter')

router.get('/', function(req, res) {
  res.view('Home')
})

router.get('/about', function(req, res) {
  res.view('About')
})

module.exports = router
