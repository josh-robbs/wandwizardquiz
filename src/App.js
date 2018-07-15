import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Brochure from './components/Brochure'
import Wand from './components/Wand'
import Message from './components/Message'
import Wizards from './components/Wizards'
import Footer from './components/Footer'


class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      allWizards: [],
      currentWand: {  wood:"",
                      core: "",
                      length: "" },
      currentWizard: "" 
    }
  }

////getWizards pulls from API, filters, sets state

  getWizards = (currentPage = 0, pageLimit = 3, data = []) => {
    let endpoints = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"]
    return fetch(`https://hp-api.herokuapp.com/api/characters/house/${endpoints[currentPage]}`)
      .then(response => response.json())
      .then(myJson => {
        let filteredJson = this.wizHasWand(myJson)
        if(currentPage === pageLimit){
          return [...data, ...filteredJson]
        }
        return this.getWizards(currentPage+1, pageLimit, [...data, ...filteredJson])
      })
  }


  ////wizHasWand filters allWizards down to those with wand data of at least wood
  ////wizHasWand filters out Ginny because she has the same wood as Voldemort
  ////wizHasWand filters out Slughorn to make it 12 total wizards

  wizHasWand = (array) => {
    return array.filter((element) => {
      return element.wand.wood && element.name !== "Ginny Weasley" && element.name !== "Horace Slughorn"
    })
  }
  
  componentDidMount() {
    this.getWizards()
      .then(data => this.setState({allWizards: data}))
  }

////selectWizard tracks the current selected wizard by updating state

  selectWizard = (event) => {
    this.setState({currentWizard: event.target.name})
  }

////getWand generates a random wand

  getWand = () => {
    let randomWand = this.state.allWizards[Math.floor(Math.random()*this.state.allWizards.length)].wand
    return randomWand
  }

////newWand populates a new wand on click

  newWand = () => {
    let wand = this.getWand()
    this.setState(
      { currentWand: wand,
        currentWizard: "" }
    )
  }

  render() {
    return (
      <div className="app flex">
        <Header />
        <Brochure />
        <main className="main flex">
          <Wand     wand={this.state.currentWand} />
          <Message  newWand={this.newWand} 
                    wand={this.state.currentWand.wood} 
                    wizard={this.state.currentWizard} />
          <Wizards  wizards={this.state.allWizards} 
                    selectWizard={this.selectWizard} 
                    currentWizard={this.state.currentWizard} />
        </main>
        <Footer />
      </div>
    )
  }

}

export default App
