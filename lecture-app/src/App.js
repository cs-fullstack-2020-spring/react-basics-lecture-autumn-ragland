import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameDisplay from './NameDisplay';

function App() {
  // let myStudent = {
  //   name : "Autumn",
  //   grade : 90,
  // }
  return (
    <div className="App">
      <header className="App-header">
      <h1>React is fun!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://github.com/autumn-ragland" target="_blank">
          Check out my GitHub
        </a>
        <NameDisplay name = "autumn" grade = "100"></NameDisplay>
      </header>
    </div>
  );
}

export default App;
