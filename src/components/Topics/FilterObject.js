import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super(); 
        this.state = {
            employees: [
            {
                name: "Andrew", 
                title: "Netrunner", 
                age: 25,
            }, {
                name: "Jennifer", 
                title:"Techie", 
                age: 22,
            }, { 
                name: "V", 
                title: "Solo", 
            }
        ],
            userInput: "",  
            filteredArray: [], 
        }
    }
    handleChange(value){
        this.setState({
            userInput: value,
        });
    } 
    filterEmployees(prop){
        let employees = this.state.employees;
        let filteredEmployees = [];

        for (let i = 0; i < employees.length;i++) {
            if (employees[i].hasOwnProperty(prop) ) {
                filteredEmployees.push(employees[i])
            }
        }
        this.setState({filteredArray: filteredEmployees})
    }
render(){
    return(
        <div className="puzzleBox filterObjectPB">
          <h4> Filter Object </h4>
          <span className="puzzleText"> Original:{JSON.stringify(this.state.employees)}</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
          <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput)}> Filter </button>
          <span className="resultsBox filterObjectRB"> Filtered:{JSON.stringify(this.state.filteredArray)}</span>
        </div>

    )
}
}
export default FilterObject; 