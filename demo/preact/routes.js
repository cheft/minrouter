var router = require('../../minrouter.min')

router.get('/', function(req, res) {
  res.view('Home')
})

router.get('/about', function(req, res) {
  res.view('About')
})

module.exports = router
