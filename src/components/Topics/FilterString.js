import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super(); 
        this.state = {
            fruits: ['watermelon','apple','strawberry','orange','pear'],
            userInput: '',
            filteredFruits: [],
        }
    }
    changeUserInput(event){
        this.setState({
            userInput: event,
        })
    }
    filterArray (userInput) {
        let fruits = this.state.fruits;
        let filteredFruits = [];
        for(let i = 0;i<fruits.length;i++) {
            if(fruits[i].includes(userInput)) {
                filteredFruits.push(fruits[i])
            }
        }
        this.setState({
            filteredFruits: filteredFruits,
        })
    }
    render () {
        return (
        <div className="puzzleBox filterStringPB"> 
            <h4>Filter String</h4> 
            <span className="puzzleText">Fruits: {JSON.stringify(this.state.fruits)}</span> 
            <input className="inputLine" onChange={(event) => this.changeUserInput(event.target.value)}></input> 
            <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter</button> 
            <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredFruits)}</span>
        </div> 
  )
 }
}
export default FilterString; 