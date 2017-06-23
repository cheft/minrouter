import { h } from 'preact'
import render from 'preact-render-to-string'

import Home from './pages/home'
import About from './pages/about'

module.exports = function (component) {
  // Render the component to a string
  if (component === 'Home') {
    return render(<Home/>)
  } else if (component === 'About') {
    return render(<About/>)
  }
}
