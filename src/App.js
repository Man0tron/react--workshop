import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import Button from './Components/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         G'DDAY MATE
         <Button> Yeah nah yeah </Button>
        </p>
      </div>
    );
  }
}

export default App;
