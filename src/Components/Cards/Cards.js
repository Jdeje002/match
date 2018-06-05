// Cards//
import React from "react"
import './Cards.css'
import '../../cards.json'



const Cards = props => (
    <div>
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.img}
          onClick={
            props.clickHandler
          }
        />
      </div>
    </div>
    </div>
  );
  
export default Cards