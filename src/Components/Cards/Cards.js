// Cards//
import React from "react"
import './Cards.css'
import '../../cards.json'



const Cards = props => (
    <div className="col-md-3" onClick={props.clickhandler} clicked={props.wasclicked}>
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.img}
          onClick={props.clickhandler}
          wasclicked={props.wasclicked}
          hotdog='hello everyone'
        />
      </div>
    </div>
    </div>
  );
  
export default Cards