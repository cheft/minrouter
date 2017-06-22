var router = window.router = require('./routes')
    
router.addResMethod('view', function(content) {
  console.log(content)
  document.getElementById('content').innerText = content
})

router()

var links = document.querySelectorAll('a')
links.forEach(function(link) {
  bindEvent(link)
})

function bindEvent(link) {
  link.onclick = function() {
    router.go(link.dataset.href)
  }
}
