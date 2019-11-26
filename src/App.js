import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component{
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1> Hi, I am a react app.</h1>
            <p>hello</p>
            <Person name="Max" age="28"/>
            <Person name="Manu" age="29"> My hobbies: racing </Person>
            <Person name="Jane" age="30"/>
          </header>
        </div>
    );
  }
}

export default App;
