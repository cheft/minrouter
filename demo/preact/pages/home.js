import { h, Component } from 'preact'
import Navigator from '../components/navigator'

export default class Hello extends Component {
  async componentDidMount() {
    let stars = 500
    this.setState({ stars })
  }
  render({ repo }, { stars=0 }) {
    let url = `//github.com/${repo}`
    return (
      <div>
        <Navigator />
        <a href={url} class="stars">
          ⭐️ {stars} Stars
        </a>
      </div>
    )
  }
}
