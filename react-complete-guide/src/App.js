import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

// This is a container class because we are manipulating the state.
class App extends Component {
  
  state = {
    persons : [
      { id: '1234', name: "Griffin", age:'23'},
      { id: '4567', name: "Cory", age:'22'},
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log("Clicked")
    // DO NOT DO THIS: this.state.persons[0].name = "Griffin Gluek Kelley";
    // Only changing state or props causes react to re-render the page in browser.
    this.setState({
      persons:  [
        { id: '1234', name: newName, age:'23'},
        { id: '4567', name: "Cory Welper", age:'22'}
      ],
    });
  }
   
  nameChangedHandler = (event, id) => { 

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const singlePerson = {
      ...this.state.persons[personIndex],
    }

    singlePerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = singlePerson;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // slice() / ...spread copies the old array to avoid manipulating the state directly
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const currentVisibility = this.state.showPersons;
    this.setState(
      {
        showPersons: !currentVisibility,
      }
    )
  }

  // Whenever react re-renders this component, this entire render() function is called
  render() {
    let personList = null;
    if(this.state.showPersons){
      personList =(
        <div >

          {/* map() every in an array into something else  (Similar to foreach) */}
          {this.state.persons.map( (person, index) => {
            return(
              <Person 
                name={person.name} 
                age={person.age}
                click={ () => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}/>
            );
          })}
          
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            // Recommended To Use Bind Over The Arrow Function above due to efficiency
            changed={this.nameChangedHandler}
            click={this.switchNameHandler.bind(this, "Griffin!!")}>
            I am a child element.
          </Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> 
          */}

        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={ () => this.switchNameHandler("Griffin Gluek")}>Switch Name</button>
        <button onClick={this.togglePersonHandler}>Toggle Persons</button>
        {
          /* Cannot use if statements in here, only ternary expressions */
          //this.state.showPersons ? personList : <p>Hidden List</p>
          personList
        }
        
      </div>
    );
  }
}

export default App;
