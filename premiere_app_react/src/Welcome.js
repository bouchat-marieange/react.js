import React, { Component } from 'react'; // Importe la librairie react installée dans le dossier node_modules
import Hello from 'Hello'; // importer le deuxième composant Hello das le premier composant welcome

export default class Welcome extends Component {// Création de la class Welcome et export de la classe pour l'imbriquer dans d'autres composants
  render() { // fonction dans react qui renvoie la vue
    return (
      <div className="App"> // classname est la même chose que class en html mais react utilise déja le mot class donc petit changement (le comportement est le même)
        // <Hello /> // On appelle le deuxième composant Hello  dans le premier composant Welcome sous la forme <Nom_Du_Composant/>
          <Hello parametre={'HelloWorld'} /> // On envoie les paramètre d'un composant hello à un à autre composant Welcome
      </div>
    );
  }
}
