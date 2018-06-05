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
    console.log("test")
    let {alt} = event.target
    console.log(alt)
    let cardsArray = this.state.cardsArray

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
        
        {this.state.cardsArray.map(card => <Cards className="" key ={card.id} name={card.name} img={card.image} clickHandler={this.handleCardClick}/>)
        }
        </div>

      </div>
    );
  }
}

export default App;
