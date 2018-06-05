// Imports//

import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Instruction from './Components/Instruction';
import card from './cards.json'
import Cards from "./Components/Cards"


class App extends Component {
  render() {
    return (
      <div className="App ">
       <nav>
        <NavBar/>
       </nav>
       <div>
       <Instruction/>
       </div>
      <div >
        <div >
        <div  ></div>
      
      <div > {card.map(card=> <Cards name= {card.name} img = {card.image} />)
      }
      </div>
      <div> </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
