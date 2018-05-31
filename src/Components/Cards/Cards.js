// Cards//
import React from "react"
import './Cards.css'
import '../../cards.json'

const Cards = props => (
    
    <div className="card ">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.img}
        />
      </div>
    </div>
   
  );
  
export default Cards