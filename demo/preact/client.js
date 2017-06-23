import { h, render } from 'preact'
import Hello from './pages/home'
import About from './pages/about'

var router = require('./routes')

router.addResMethod('view', function (component) {
  console.log(component)
  var app = document.getElementById('app')
  app.innerHTML = ''
  if (component === 'Home') {
    render(<Hello />, app)
  } else if (component === 'About') {
    render(<About />, app)
  }
  router.proxyLinks(document.querySelectorAll('a'))
})

router()
