import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import List from './component/List';

class App extends Component {
  render() {
    var valeur = 'bonjour';
    return (
      // Attention une seule div principale
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue dans mon application</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome/>

        <List todos={['vaiselle','cuisiner']} />

      </div>
    );
  }
}

export default App;
