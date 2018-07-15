import React, { Component } from 'react'


class Wizard extends Component {

  constructor(props){
    super(props)
    this.state = {
      glowBorder: true
    }
  }

  componentDidMount(){
    if(this.props.currentWizard === this.props.wizard.wand.wood){
      this.toggleGlow() 
    } 
  }

  toggleGlow = () => {
    this.setState({
      glowBorder: !this.state.glowBorder
    })
  }

  handleClick = (event) => {
    this.props.selectWizard(event)
  }

  render(){
    return(
        <img  key={Math.random() + Math.random()}
              className= {this.state.glowBorder ? "wizard-thumbs" : "wizard-thumbs glowing-border"}
              src={this.props.wizard.image} 
              alt={"picture of " + this.props.wizard.name}
              name={this.props.wizard.wand.wood}
              onClick={(event) => this.handleClick(event)} />
    )
  }

}

export default Wizard