import React from 'react';
import './Score.css';
import char from "./cards.json";

class Score extends React.Component {
    state = {
      count: 0
    };
  
    

       Point = () => {
           if(char.id === char.id){
            this.setState({count:0})
           } else{
            this.setState({count:this.state.count + 1 })
           }};
  
    render() {
      return (
        <div className="card text-center">
            <p className="card-text">Click Count: {this.state.count}</p>
        </div>
      );
    }
  }
  export default Score

