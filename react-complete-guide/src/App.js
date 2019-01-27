import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js'

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

    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
    };

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
        </div>
      );
      buttonStyle.backgroundColor = 'red';
    }

    const dynamicClasses = [];
    if(this.state.persons.length <= 2){
      dynamicClasses.push('red');
    }
    if(this.state.persons.length <= 1){
      dynamicClasses.push('bold');
    }

    return (
        <div className={classes.App}>
            <h1>Hi, I'm a React App!</h1>
            <p className={dynamicClasses.join(' ')}>Dynamic Classes</p>
            <button style={buttonStyle} onClick={this.togglePersonHandler}>Toggle Persons</button>
            {personList}
        </div>
    );
  }
}

export default App;
