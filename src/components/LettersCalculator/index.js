// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate The Letters You Enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the phrase"
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.Of Letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
