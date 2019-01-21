import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

// This is a container class because we are manipulating the state.
class App extends Component {
  
  state = {
    persons : [
      { name: "Griffin", age:'23'},
      { name: "Cory", age:'22'},
    ]
  }

  switchNameHandler = (newName) =>{
    // console.log("Clicked")
    // DO NOT DO THIS: this.state.persons[0].name = "Griffin Gluek Kelley";
    // Only changing state or props causes react to re-render the page in browser.
    this.setState({
      persons:  [
        { name: newName, age:'23'},
        { name: "Cory Welper", age:'22'}
      ]
    });
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons:  [
        { name: event.target.value, age:'23'},
        { name: "Cory Welper", age:'22'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={ () => this.switchNameHandler("Griffin Gluek")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          // Recommended To Use Bind Over The Arrow Function above due to efficiency
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Griffin!!")}>
          I am a child element.
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
