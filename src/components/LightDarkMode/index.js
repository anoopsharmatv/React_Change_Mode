import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const darkMode = {
      cardMode: 'darkCard',
      headingMode: 'darkHeading',
      buttonMode: 'darkButton',
      modeText: 'Light Mode',
    }

    const lightMode = {
      cardMode: 'lightCard',
      headingMode: 'lightHeading',
      buttonMode: 'lightButton',
      modeText: 'Dark Mode',
    }

    const mode = isDarkMode ? darkMode : lightMode
    const {cardMode, headingMode, buttonMode, modeText} = mode

    return (
      <div className="bg-container">
        <div className={`card-container ${cardMode}`}>
          <h1 className={`${headingMode}`}>Click Here To Change Mode</h1>
          <button
            type="button"
            className={`button ${buttonMode}`}
            onClick={this.changeMode}
          >
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
