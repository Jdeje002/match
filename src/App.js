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
      <div className="App">
        <div className = "container">
          <nav>
            <NavBar />
          </nav>
          <div className="container">
            <Instruction />
          </div>
        </div>

        <div className= "container"> {card.map(card => <Cards className="" name={card.name} img={card.image} />)
        }
        </div>

      </div>
    );
  }
}

export default App;
