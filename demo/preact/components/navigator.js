import { h, Component } from 'preact'

export default class Navigator extends Component {
  render() {
    return <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  }
}
