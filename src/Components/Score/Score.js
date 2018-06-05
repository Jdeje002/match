import React from 'react';
import './Score.css';


class Score extends React.Component {
    state = {
      count: 0
    };
  
    render() {
      return (
        <div className="card text-center">
            <p className="card-text">Click Count: {this.state.count}</p>
        </div>
      );
    }
  }
  export default Score

