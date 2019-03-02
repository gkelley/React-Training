import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';

// This is a container class because we are manipulating the state.
class App extends Component {
  
  state = {
    persons : [
      { id: '1234', name: "Griffin", age:'23'},
      { id: '4567', name: "Cory", age:'22'},
      { id: '2342', name: "Jim", age:'60'},
    ],
    showPersons: false,
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
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }
  
    return (
        <div className={classes.App}>
            <Cockpit 
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonHandler}/>

            {personList}
        </div>
    );
  }
}

export default App;
