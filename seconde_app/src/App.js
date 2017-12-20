import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import List from './component/List';

class App extends Component {
  render() {
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

        {/* var valeur = 'bonjour';
        <List NomDuProps={valeur}/>
        var test = this.props.NomDuProps;
        console.log(test); */}


        var valeur2 = 'Salut';
        <List todos={['vaiselle','cuisiner']} NomDeMaProps2={valeur2} />


      </div>
    );
  }
}

export default App;
