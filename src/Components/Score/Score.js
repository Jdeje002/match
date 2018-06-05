import React from 'react';
import './Score.css';

const Score = props => 
   <div className="card text-dark text-center">
            <p className="card-text">Click Count: {props.count}</p>
        </div>


  export default Score

