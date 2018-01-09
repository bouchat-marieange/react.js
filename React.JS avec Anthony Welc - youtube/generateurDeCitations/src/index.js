import React from 'react'; // On importe React
import ReactDom from 'react-dom'; // On importe ReactDom pour le rendu, l'affichage de la page
import './index.css'; // On importe la feuille de style lié au component

class App extends React.Component {
  render() {
    return (
      // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
      <div> 
        <p>
          Ma citation
          <span>- Auteur</span>
          <button>Une autre citation !</button>
        </p>
      </div>
      )
  }
}

//On réalise le rendu du component App créé juste au dessus
ReactDom.render(
  <App />, // On va cherche notre component
  document.getElementById('root') // On indique où on veut qu'il soit afficher dans index.html
  );
