import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Wand from './components/Wand'
import Message from './components/Message'
import Wizards from './components/Wizards'


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

  getWizards = (currentPage = 0, pageLimit = 3, data = []) => {
    let endpoints = ["gryffindor", "slytherin","ravenclaw","hufflepuff"]
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${endpoints[currentPage]}`)
      .then(response => response.json())
      .then(myJson => {
        let filteredJson = this.wizHasWand(myJson)
        if(currentPage === pageLimit){
          return [...data, ...filteredJson]
        }
        return this.getWizards(currentPage+1, pageLimit, [...data, ...filteredJson])
      })
  }

  wizHasWand = (array) => {
    return array.filter((element) => {
      return element.wand.wood
    })
  }
  
  componentDidMount() {
    this.getWizards()
      .then(data => this.setState({allWizards: data}))
  }

  selectWizard = (event) => {
    this.setState({currentWizard: event.target.name})
    console.log(this.state)
  }

  getWand = () => {
    let randomWand = this.state.allWizards[Math.floor(Math.random()*this.state.allWizards.length)].wand
    return randomWand
  }

  newWand = () => {
    let wand = this.getWand()
    this.setState({ currentWand: wand,
                    currentWizard: ""})
  }


  render() {
    return (
      <div className="App">
          <Header />
          <main className="main flex">
            <Wand wand={this.state.currentWand} />
            <Message newWand={this.newWand} wand={this.state.currentWand.wood} wizard={this.state.currentWizard} />
            <Wizards wizards={this.state.allWizards} selectWizard={this.selectWizard} />
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
