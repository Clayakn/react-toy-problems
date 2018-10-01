import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super(); 
        this.state = {
            userInput: "", 
            palindrome: "",
        }
    }
    changeUserInput(value){
        this.setState({
            userInput: value,
        })
    }
    checkPalindrome(userInput){
        let value = userInput.toLowerCase();
        let backwardsValue = userInput.split('').reverse().join('').toLowerCase();
        value === backwardsValue ?  this.setState({palindrome: 'true'}): this.setState({palindrome: 'false'})
    }
 render () {
        return (
       <div className="puzzleBox palindromePB"> 
           <h4>Palindrome</h4> 
           <input className="inputLine" onChange={(event) => this.changeUserInput(event.target.value)}></input>
           <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button> 
           <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
       </div> 
  )
 }
}
export default Palindrome;