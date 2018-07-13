import React, { Component } from 'react';

class Answer extends Component {

  render() {
    if(this.props.wand===""){
      return <h2>Please click below for a wand.</h2>
    }
    else if(this.props.wizard==="") {
      return <h2>Which witch or wizard's wand is described? Please click on an image.</h2>
    }
    else if (this.props.wizard===this.props.wand){
      return <h2>Correct!</h2>
    } 
    else {
      return <h2>Incorrect. Please select another witch or wizard.</h2>
    }
  }
}

export default Answer