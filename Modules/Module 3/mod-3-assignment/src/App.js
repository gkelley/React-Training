import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'


// This is a container class because we are manipulating the state.
class App extends Component {
  state = {
    userName: "gkelley",
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
          <UserOutput username={this.state.userName}/>
          <UserInput changeUserName={this.changeUsernameHandler} username={this.state.userName}/>
      </div>
    );
  }
}

export default App;
