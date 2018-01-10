import React from 'react'; // On importe React
import Citation from './citation'; // On importe le fichier Citation (qui contient uniquement la citation et auteur)
import citations from '../citations';// On importe le fichier citation à partir de son emplacement par rapport au fichier index.js donc ./ puisque dans le même dossier, suivi du nom de fichier sans son extension automatiquement reconnu par React

class App extends React.Component {

  state = {};// On défini un state vide au départ, ce qu'il contiendra sera déterminé et affiché (citation aléatoire) dès le lancement ou rafraichissement de la page grâce à la ligne componentWillMount() qui lance la fonction genererCitation au lancement de la page.

  componentWillMount(){
    this.genererCitation();//Dès le lancement de la page, la fonction genererCitation est lancée pour définir aléatoirement le contenu du State (citation + auteur) qui sera afficher au lancement ou au rafraichissement de la page
  }

  genererCitation = event => {
    // On  transforme citations en Array et on récupère toutes les clefs de cet objet qui sont stockée dans la constante keyArray
    const keyArray = Object.keys(citations);
    console.log(keyArray); // Test qui permet à chaque click sur le bouton d'afficher le tableau reprenant les clefs du tableau citations
    // Un citation au hasard en utilisant la fonction floor (arrondir) et Math.random pour générer un nombre aléatoire * la longueur du tableau (array.length)
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    console.log(randomKey); //Test pour voir si à chaque clique de bouton, dans l'onglet console du dev tools de chrome, il affiche bien une clef de citation différente et alétoire à chaque click sur le bouton. Exemple citation 8, citation 4, citation 10 etc...

    if (this.state.citation === citations[randomKey].citation){ // si la citation actuellement stockée dans le state et affichée est la même que celle qui va être envoyée aléatoirement alors ...
      this.genererCitation(); // tu relance la fonction genererCitation pour fournir une nouvelle citation différente
      return;// puis tu arrête et tu sors de là et donc tu n'exécute pas la suite du code qui remplacerait juste la citation actuelle par la même citation dans le State, ce qui est l'inverse de ce que l'on veut obtenir.
    }

    this.setState(citations[randomKey]); // On définit notre State qui était rester vide jusqu'ici en le générant aléatoirement en fonction de la clef aléatoire qui aura été choisie.
  };

  render() {
    return (
      // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
      <div>
        <Citation details={this.state}/>
        {/* On va donc appeller le component citation.js (components/citation.js). On passe toutes les données du State en l'appelant details (on peut changer ce nom si on le souhaite). Le props details va donc transmettre tout le contenu du state à cet endroit */}
        {/* Ici le e est une écriture abrégée pour dire event */}
        <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
      </div>
      )
  }
}

export default App;// permet d'exporter notre component App. C'est une partie indispensable dans tous les components.
