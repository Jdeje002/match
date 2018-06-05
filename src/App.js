// Imports//

import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Instruction from './Components/Instruction';
import card from './cards.json'
import Cards from "./Components/Cards"


class App extends Component {

// state// 

  state = {
    count : "",
    cardsArray : card
    
  } 
  
  

  handleCardClick = event =>{
    console.log('hi')
    let {alt, wasclicked, hotdog} = event.target
    
    let cardsArray = this.state.cardsArray
    console.log(event.target)
    console.log(wasclicked)
    console.log(alt)
    console.log(hotdog)


    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    this.setState({cardsArray})


  }


  render() {
    return (
      <div className="App">
        <div className = "container">
          <nav>
            <NavBar score = {this.state.count}/>
          </nav>
          <div className="container">
            <Instruction />
          </div>
        </div>

        <div className= "container"> 
        <div className = "row">
        
        {this.state.cardsArray.map(card => <Cards key ={card.id} name={card.name} img={card.image} clickhandler={this.handleCardClick} wasclicked={card.wasClicked.toString()}/>)
        }
        </div>
        </div>

      </div>
    );
  }
}

export default App;
