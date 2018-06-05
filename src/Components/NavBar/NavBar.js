/// Nav Bar import////

import React from "react";
import "./NavBar.css";
import Score from "../Score"

const NavBar = props=> (
    <div>
        <nav id="title"> 
            <h2>Match it up!</h2>
            <h3>Your Points!</h3>
             <Score gameScore = {props.score}/>
        
        </nav>    
    </div>
);

export default NavBar


