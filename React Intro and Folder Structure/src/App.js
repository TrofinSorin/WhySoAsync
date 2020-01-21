import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Toolbar from '@shared/Toolbar';
import environment from 'environment';

function App() {
  console.log('environment', environment);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link red"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Toolbar></Toolbar>
    </div>
  );
}

export default App;
