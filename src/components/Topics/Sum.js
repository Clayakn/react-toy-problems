import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super(); 
        this.state = {
            number1: 0,
            number2: 0, 
            sum: null,
        }
    }
    changeNumber1(value){
        this.setState({
            number1: value,
        })
    }
    changeNumber2(value){
        this.setState({
            number2: value,
        })
    }
    sum(num1,num2){ 
        let sum = +num1 + +num2;
        this.setState({
            sum: sum,
        })
    }
    render () {
        return (
            <div className="puzzleBox sumPB"> 
            <h4>Sum</h4> 
            <input className="inputLine" onChange={ (event) => {this.changeNumber1(event.target.value)}}></input>
            <input className="inputLine" onChange={ (event) => {this.changeNumber2(event.target.value)}}></input>
            <button className="confirmationButton" onClick={ () => {this.sum(this.state.number1,this.state.number2)}}>Add</button> 
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div> 
  )
 }
}
export default Sum; 