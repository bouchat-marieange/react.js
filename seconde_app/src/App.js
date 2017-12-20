import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome'; // On importe notre class "Welcome" de ./ (dans le même dossier) - React comprend que c'est du JS (inutile de d'indiquer Welcome.js, par contre si c'est un autre langage, il faut lui préciser)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue mon Application</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
