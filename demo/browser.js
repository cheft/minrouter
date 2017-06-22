var router = require('./routes')
    
router.addResMethod('view', function(content) {
  console.log(content)
  document.getElementById('content').innerText = content
})

router()

router.proxyLinks(document.querySelectorAll('a'))
