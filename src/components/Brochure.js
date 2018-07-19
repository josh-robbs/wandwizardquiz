import React, { Component } from 'react'


class Brochure extends Component {

  state = {
      open: true
  }

  toggleBrochure = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <section className="brochure-section">
        <div className= {this.state.open ? "brochure hidden" : "brochure"}>
          <p>If you love Harry Potter and want to add to your Harry Potter 
            trivia knowledge base, this app is for you!</p>
            <ol>
              <li>Click 'Accio Wand' to populate a wand description.</li>
              <li>Read Olivander's description.</li>
              <li>Try to guess which witch or wizard owns the wand!</li>
            </ol>
        </div>
        <div id="brochureButton" onClick={this.toggleBrochure}>
          <p>How to Play</p>
        </div>
      </section>
    )
  }

}

export default Brochure