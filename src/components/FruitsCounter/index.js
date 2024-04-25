// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangos: 0, bananast: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangos, bananas} = this.state

    return (
      <div className="app-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangos}</span> mangoes
            <span className="count">{bananas}</span> bananas
          </h1>

          <div className="counter-control">
            <div className="fruits-item-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits-item-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
