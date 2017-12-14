import React, { Component } from 'react';// Importe la librairie react installée dans le dossier node_modules

export default class Hello extends Component {// Création de la class Hello et export de la classe pour l'imbriquer dans d'autres composants
  render() {// fonction dans react qui renvoie la vue
    return (
      <div className="App">// classname est la même chose que class en html mais react utilise déja le mot class donc petit changement (le comportement est le même)
        // Hello
        {this.props.parametre}
      </div>
    );
  }
}
