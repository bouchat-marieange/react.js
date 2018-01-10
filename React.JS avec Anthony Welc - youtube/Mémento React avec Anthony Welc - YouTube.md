# REACT JS TUTO FR (Mini Serie) - https://www.youtube.com/watch?v=CpYRr_t4AFc&list=PLHSUbP5y6J0VXXLj9fUZTc0oAvgcgoSsz

## Partie 1 : Les outils pour développer en ReactJS

1. Node.js (télécharger et installer node.js selon son système d'exploitation en le téléchargeant sur le site officiel de https://nodejs.org/fr/)

On va sur le site https://nodejs.org/en/download/ pour télécharger et installer la dernière version de node.js

2. Un navigateur (Chrome, Firefox, ...)

3. Extension sur Chrome ou sur Firefox qui s'appelle React Developer Tools

Installer cette extention sur votre navigateur de développement habituel. Cela permettre lorsque l'on navigue sur des sites fait avec React (ex: https://fr.airbnb.be/) d'accéder à d'autres informations visible dans la console (accès par la touche raccourci F12 pour ouvrir la console dans Chrome - onglet React, on pourra alors visualier les props et les states. Ce sera très utile pour vérifier si le code que l'on a mis en place fonctionne, comprendre comment il fonctionne etc...

4. Un éditeur de code (IDE) ex: Sublimtext, Atom, ...

5. Extension de IDE (pour Atom ou SublimText) Babel qui permet de coloriser syntaxiquement différement le code JSX (la manière d'écrire du HTML dans React). Dans sublim texte une fois babel installeé CTRL + Shift + P - Package control : Install Package, taper Babel et Enter), aller dans un fichier contenant js contenant du code ReactJs, aller dans le coté inférieur droite de l'écran où est indiquer javascritpt, cliquer dessus, une liste déroulante apparait en haut de la liste choisir Babel - Javascript Babel pour obtenir une coloration syntaxique du code adaptée au développement avec ReactJS."Open all with current extension with" et selectionner javascript Babel pour ne pas avoir à répéter l'opération chaque fois que l'on ouvre un fichier js contenant du react. Si c'est un fichier js normal, il sera coloriser normalement, si il contient du react, il utilisera la colorisation syntaxique adaptée à React.

6. http://cmder.net/ est une console portable plus conviviale pour encoder les lignes de commande dans windows uniquement (sous windows, télécharger et installer)


## Partie 2 : Ton premier component Reactjs

1. Commencer par télécharger le petit fichier qui contient toutes les citations afin d'éviter d'avoir à les télécharger à la main. (Regarder plus bas dans cette page REACT Mini-Série: Générateur de Citations: Fichiers de démarrage)

2. Dans le fichier de travail, ouvrir le terminal et taper la commande suivante en 2 parties pour installer node.js
** Pour Node.js 9
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
Un nouveau dossier node_modules contenant toutes une serie de fichiers est créer dans le dossier de travail.

3. Toujours avec le terminal ouvert dans le dossier de travail, taper la commande npm install (cette commande installe toutes les dépendances et modules dans une version compatible avec le projet qui sont indiquées dans le fichier package.jason en une seule manipulation)
Si on va voir dans le fichier package.json, on voir que dans les dépendances, il y a react (on charge react pour la partie logi-technique) et react-dom (qui se charge de l'affichage et du rendu)

4. Ouvrir le dossier de travail dans Atom ou sublimtext

5. Dans la console grâce à tout ce que l'on vient d'installer on va pouvoir lancer la commande npm start (pour lancer le serveur react local sur le port 3000 - attention il faut qu'il n'y ai aucun autre serveur déja lancé sur le port 3000, sinon message demandant si on veut ouvrir le serveur sur un autre port, quand clique Yes - ouvre serveur sur port 3001 )
Une nouvelle fenêtre est ouverte autoamatiquement dans le navigateur par default à l'adresse: http://localhost:3000/

6. Pour vérifier si le code react fonctionne, on va dans le fichier index.js et on tape la ligne de code suivate alert('coucou'); qui va tout simplement ouvrir une fenêtre d'alerte affichant le message coucou quand on lance le serveur local avec la commnade npm start.
L'affichage du message nous indique que tout fonctionne bien.

7. Si on va dans le sous dossier public du dossier de travail on y trouve 2 fichiers favicon.ico (qui est le favicon qui s'affiche dans l'onglet de la page et qui est automatiquement ajouter lorsqu'on installe react)
et index.html (un fichier html basic beaucoup plus léger et simple que celui créer automatiquement par create react app et avec moins de commnentaire ). Il est juste indiqué que le body ne doit contenir qu'une div principale (qui contiendra toutes les autres) et qui porte id="root". C'est dans cette div "root" que sera placé tout le code React.

8. On va maintenant pouvoir commencer à coder en React. On va donc dans le fichier index.js (c'est ce fichier qui va générer le fichier index.html qui se trouve dans le sous-dossier public)
On efface tout ce qui est dans le fichier index.js et on va commencer par importer React (import de React avec ES6)avec la ligne de code :

```javascript
import React from 'react'; //En fait quand on fait import from ..., l'ordinateur va chercher react dans tout les sous-dossier du sous-dossier node-modules pour pouvoir l'importer. Cela évite d'avoir une liste interminable de fichier à linker dans notre fichier html les import se font directement dans les fichiers js.
```

9. On va à présente créer un component. Un component c'est ce qui va nous servir à créer notre application. Chaque partie de l'application sera un petit component (ex: header, contenu, footer, sidebare, etc...)
Pour créer un component on doit écrire le code suivant:

``` javascript
class App extends React.Component {
  render() {
    return (
      <h1>Coucou</h1>
      )
  }
}
```

Un component au minimum ça a besoin d'un render et entre accolades on va pouvoir lui dire ce que l'on veut rendre, ce que l'on veut afficher. Vu que c'est une fonction on va lui dire return() et on va lui demander de nous retourner du html.

10. A ce stade si on veut voir le résultat, on ne voit rien et si on regarde dans la console (F12) de Chrome on voit qu'il y a une erreur: 'App' is defined but never used'. Cela nous indique que App a bien été créer mais n'a pas encore été utilisé, que jusqu'ici on n'en a rien fait. On va devoir faire un rendu.

11. On crée une fonction dans laquelle on va appeller notre component App et on va ensuite indiquer où on veut qu'il s'affiche dans notre fichier index.html
Pour faire un rendu avec React on va utiliser le ReactDom.render en utilisant le code suivant:

```Javascript
ReactDom.render(
  <App />, // On va cherche notre component
  document.getElementById('root') // On indique où on veut qu'il soit afficher dans index.html
  );

```
Un component React s'utilise comme une balise auto-fermante html (ex: <App />).
On doit d'abord indiqué le component React que le l'on veut afficher (ici App)
Puis ensuite on doit indiqué où on veut qu'il apparaisse dans le fichier html qui sera généré et donc où il apparaitra dans la page. On veut que le contenu de notre component App apparaisse dans index.html à l'intérieur de la div qui porte id "root", cela correspond à une manipulation courante du DOM en javascript. On indique cela avec le code suivant:

``` javascript
document.getElementById('root')
```

12.  A ce stade si on veut voir le résultat de l'affichage, on a encore une erreur:
'ReactDom' is not defined, en effet au début de notre fichier index.js on a bien importer React mais on n'a pas encore importer ReactDom. Il faut donc l'importer également au début du fichier juste après l'import de React avec le code:

``` Javascript
import ReactDom from 'react-dom';
```

Maintenant lorsqu'on enregistre le fichier index.js, l'affichage du message Coucou se fait dans la page.

13. On peut aussi décider de ne pas importer tout le ReactDom mais de n'importer que la partie de ReactDom qui s'occupe du rendu. On remplace alors le code de la ligne précédente pour importer ReactDom par la ligne de code suivante:

``` Javascript
import { render } from 'react-dom';
```

14. On va maintenant mettre un peu en forme notre générateur de citation en créant plusieurs balises html avec du contenu (p, span). Attention la totalité du code html doit être contenue dans une div globale sinon on aura un message d'erreur car tout le code html va être généré dans une seule div principale avec l'id "root" dans le fichier index.html.

15. On va maintenant linké la feuille de style index.css à notre générateur. Mais nous n'allos pas le faire dans le fichier index.html comme nous en avons l'habitude mais bien directement en l'important dans notre fichier javascript index.js (ainsi la mise en forme est liée au composant et non à la page html qui est générée à partir de la totalité des composants et pourra plus facilement être réutilisé séparérment pour un autre projet plus tard). Chaque composant possède ainsi sa mise en forme css qui lui est directement liée.
On fait cela avec l'aide d'un import en indiquant le chemin entre le fichier du composant.js et la feuille de style css.

``` Javascript
import './index.css';
// Le fichier css se trouve dans le même dossier donc on écrit ./feuilledestyle.css, si le fichier css avait été dans un dossier parent, on aurait écrit ../feuilledestyle.css et si placer dans un sous-dossier on aurai écrit ./sousdossier/feuilledestyle.css
```


Voilà la mise en forme contenue dans le fichier index.css a été appliquée et la mise en page est réalisée.

## Partie 3 : Gérer les events ReactJS

1. On va maintenant apprendre commment générer une fonction quand on clique sur un bouton.

2. Dans la partie précédente, on a créer un bouton indiquant "Une autre citation", le but maintenant est d'afficher une autre citation parmis celle contenues dans le fichier citations.js de notre projet.

3. Dans le fichier citations.js, chaque citation se présente de la même manière: 1 clef unique (citation1, citation2, citation3, ...) et à l'intérieur de chaque citation, il y a auteur: nom de l'auteur, et citation: contenu de la citation. On peut tout a fait ajouter d'autres citations à la suite de celles-ci pourvu qu'elle respecte la même syntaxe. Il s'agit juste d'un gros objet javascript.

4. On va donc maintenant devoir importer tout ce gros fichier objet dans React. Pour faire cela, on va dans notre fichier index.js et on va faire un import en ajoutant la ligne suivante avec les autres imports en haut de la page.

``` Javascript
import citations from './citations';// On importe le fichier citation à partir de son emplacement par rapport au fichier index.js donc ./ puisque dans le même dossier, suivi du nom de fichier sans son extension puisqu'il s'agit d'un fichier js automatiquement reconnu par React.
```

5. Si maintenant on essaie de faire un console.log dans le render, on va avoir un message d'erreur du type: 'citations' is definied but nerver used'. Cela signifie que le fichier citations.js a bien été importé mais n'a pas été utilisé. En gros l'ordinateur nous demande pourquoi on a importer quelque chose si c'est pour ne pas l'utilisé et nous signale donc un potentiel problème ou un oubli de notre part.
Si à ce stade on va dans l'onglet "Console" du dev tools de Chrome (F12) on a un bien toute une serie d'objet correspondant chacun à une citation avec une clef unique, un auteur et un contenu.

```
{citation1: {…}, citation2: {…}, citation3: {…}, citation4: {…}, citation5: {…}, …}
citation1
:
{auteur: "Henry David Thoreau", citation: "Si je suis venu au monde, ce n’est pas pour le tra…un lieu où il fasse bon vivre, mais pour y vivre."}
citation2
:
{auteur: "Henry David Thoreau", citation: "L’élite n’est, matériellement, ni plus avisée ni meilleure que la masse."}
citation3
:
{auteur: "Henry David Thoreau", citation: "En tuant le temps, on blesse l’éternité."}
citation4
:
{auteur: "Henry David Thoreau", citation: "On rougit d’abord de son crime et puis on s’y habitue."}
citation5
:
{auteur: "Henry David Thoreau", citation: "Tu dois vivre dans le présent, te lancer au-devant…que vague, trouver ton éternité à chaque instant."}
citation6
:
{auteur: "Ayn Rand", citation: "Ce que tu veux peut t'appartenir, mais tu dois l'accepter, y adhérer de toute ton âme."}
citation7
:
{auteur: "Ayn Rand", citation: "Une plante peut obtenir sa nourriture du sol dans …chasser pour l’obtenir. L’homme doit la produire."}
citation8
:
{auteur: "Ayn Rand", citation: "Nous sommes tous frères sous la peau et j'aimerais écorcher l'humanité pour le prouver."}
citation9
:
{auteur: "Ayn Rand", citation: "Le bonheur indique la réussite et la vie, la souff… un signal d’avertissement de défaite et de mort."}
citation10
:
{auteur: "Ayn Rand", citation: "L’homme doit vivre pour son propre intérêt, ne sac…re bonheur est le plus haut but moral de l’homme."}
__proto__
:
Object
```

6. On peut maintenant supprimer le control.log que l'on venait de créer pour test et on va stocker tout cela dans un states. Le state cela est en gros toutes les données relatives à notre component. Donc notre component App va contenir plusieurs données dont les citations.

7. Pour créer un State, se placer de préférence (mais ce n'est pas obligatoire) juste sous la ligne de définition du component App avant le render. On va créer un state qui est un Object et à cet objet, on va lui passer le citations que l'on vient d'importer en haut de la page. Ce citations que l'on vient d'importer on peut l'utiliser directement comme une variable.

``` Javascript
state = {
  citations
};
```
A l'affichage, rien ne change mais par contre si on va voir dans le dev tools dans l'onglet React, on peut voir que la partie props affiche "Empty object" et la partie State par contre afffiche
```
State
citations:{…}
citation1:{…}
  auteur: "Henry David Thoreau"
  citation:"Si je suis venu au monde, ce n’est pas pour le transformer en un lieu où il fasse bon vivre, mais pour y vivre."
etc ...
```
On ab bien donc comme un gros objet et tout ce dont on a besoin dans notre App. Maintenant, on va apprendre comment accéder à ces données-là.

8. Si maintenant à l'intérieur de mon jsx (la partie du code qui ressemble à du html) on indique entre accolades (car en jsx on peut mettre directemetn du code javascript juste entre accolades) à l'intérieur des balises <p>, on va récupérer les objets states grâce au code suivant:

``` Javascript
render() {
  return (
    // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
    <div>
      <p>
        {/* On récupére le contenu citation qui se trouve dans citation1 qui se trouve dans citations qui se trouve dans le state */}
        {this.state.citations.citation1.citation}
        {/* On récupére le contenu auteur qui se trouve dans citation1 qui se trouve dans citations qui se trouve dans le state */}
        <span>- {this.state.citations.citation1.auteur}</span>
      </p>
      <button>Une autre citation !</button>
    </div>
    )
}
}
```
Attention en jsx pour indiqué un commentaire on utilise la syntaxe suivante{/*commentaire*/}

9. Le problème c'est qu'avec ce code on a bien récupéré la citation et l'auteur dans le fichier citation, mais le bouton ne fonctionne toujours pas et c'est toujours la citation1 et son auteur qui vont s'afficher et pas une citation-auteur aléatoire lorsque l'on click sur le bouton "Une autre citation!".

10. Pour afficher une citation de manière aléatoire, on va devoir créer une fonction qui va aller chercher de manière aléatoire une citation et son auteur dans la liste des citations contenue dans le fichier citations.js. La fonction va ensuite selectionner une des citations uniquement et la placer dans notre state et c'est donc cette citation récupérée dans notre state. Et donc quand on affichera notre state, ce sera la citation selectionnée qui sera affichée. Notre state sera mis à jour à chaque fois que l'on appuyera sur le bouton "Une autre citation" se sera une nouvelle citation aléatoire qui sera affichée.

11. Pour faire cela, première chose à faire, on importe plus directement notre state, on va créer un state pour l'instant qui est vide et que l'on va remplir.
```
state = {};
```
Si on tente de voir ce que cela donne on va avoir une erreur qui nous indique qu'il ne trouve pas lire la citation1, mais nous allons corriger cela avec une fonction.

12. On va à présente s'occuper de notre bouton. Pour appleler un évènement au click sur un bouton on indique onClick, ensuite on veut indiquer du javascript donc on va mettre le code qui suit entre accolades. On va appeler un event e => , puis on va envoyer une fonction que l'on va appeller this. genererCitation(e) avec en paramètre notre évent (au click sur bouton)
. On utilise this car la fonction on va la générer à l'intérieur même de notre class. On lui dit tu va chercher à l'intérieur de notre class la fonction qui s'appelle genererCitation

```
<button onClick={e => this.genererCitation(e)}</button>
```
Remarque pour l'instant on va remplacer le code

``` javascript
{this.state.citations.citation1.citation}
<span>- {this.state.citations.citation1.auteur}</span>
```
par

```
texte
<span>- texte</span>
```
pour éviter les erreurs lors de l'affichage à chaque fois en attendant d'avoir coder entièrement la fonction pour afficher aléatoirement les citations.

13. On va a présent coder notre fonction "genererCitation". Juste sous la première ligne de création du component on va indiquer le code suivant:

``` javascript

```
On va faire 3 choses dans notre fonction:

* On va convertir tout notre objets citations en array dans laquelle on va récupérer chacune des clefs (citation1, citation2, citation3, ...). Donc juste un array avec toutes ces clefs ce qui va nous permettre d'en selectionner une au hasard parmi toutes ces clefs puis d'afficher la citation et l'auteur correspondant.On commence par créer une constante keyArray = Object.keys(citations), ce qui dit en gros stoque dans la constante keyArray sous forme de tableau toutes les keys de l'objet citations.Pour faire cela on utilise le code suivant:

``` javascript
class App extends React.Component {

  state = {};

  genererCitation = event => {
    // On  transforme citations en Array et on récupère toutes les clefs de cet objet qui sont stockée dans la constante keyArray
    const keyArray = Object.keys(citations);
    console.log(keyArray); // Test qui permet à chaque click sur le bouton d'afficher le tableau reprenant les clefs du tableau citations
  };

  render() {
    return (
      // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
      <div>
        <p>
          texte
          <span>- texte</span>
        </p>
        {/* Ici le e est une écriture abrégée pour dire event */}
        <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
      </div>
      )
  }
}
```

Quand on teste le code en cliquant sur le bouton. A chaque fois que l'on clique sur le bouton, on peut voir dans l'onglet console du dev tools de Chrome (F12) le code suivant qui s'affiche et qui est effectivement un tableau qui reprend toutes les clefs de l'objet citations précéder entre parenthèse du nombre d'élément du tableau (10)

```
(10) ["citation1", "citation2", "citation3", "citation4", "citation5", "citation6", "citation7", "citation8", "citation9", "citation10"]
```

* La seconde chose que cette fonction va faire c'est selectionner une citation au hasard parmis toutes celles contenues dans l'objet citations et plus précisément choisir une clef au hasard dans le tableau stocké dans la constant keyArray qui reprend toutes les clefs du tableau citations.
Voici le code:

``` javascript
genererCitation = event => {
  // On  transforme citations en Array et on récupère toutes les clefs de cet objet qui sont stockée dans la constante keyArray
  const keyArray = Object.keys(citations);
  console.log(keyArray); // Test qui permet à chaque click sur le bouton d'afficher le tableau reprenant les clefs du tableau citations
  // Un citation au hasard en utilisant la fonction floor (arrondir) et Math.random pour générer un nombre aléatoire * la longueur du tableau (array.length)
  const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
  console.log(randomKey); //Test pour voir si à chaque clique de bouton, dans l'onglet console du dev tools de chrome, il affiche bien une clef de citation différente et alétoire à chaque click sur le bouton. Exemple citation 8, citation 4, citation 10 etc...
};
```

* La troisième chose que cette fonction va faire c'est de remplir le state qui jusque là était rester vide. On va donc dans le state, lui passer l'objet citation mais cette fois en lui demandant de n'afficher que la citation dont l'index a été générer aléatoirement dans l'opération que l'on a effectué juste avant.

```javascript
genererCitation = event => {
  // On  transforme citations en Array et on récupère toutes les clefs de cet objet qui sont stockée dans la constante keyArray
  const keyArray = Object.keys(citations);
  console.log(keyArray); // Test qui permet à chaque click sur le bouton d'afficher le tableau reprenant les clefs du tableau citations
  // Un citation au hasard en utilisant la fonction floor (arrondir) et Math.random pour générer un nombre aléatoire * la longueur du tableau (array.length)
  const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
  console.log(randomKey); //Test pour voir si à chaque clique de bouton, dans l'onglet console du dev tools de chrome, il affiche bien une clef de citation différente et alétoire à chaque click sur le bouton. Exemple citation 8, citation 4, citation 10 etc...
  this.setState(citations[randomKey]); // On définit notre State qui était rester vide jusqu'ici en le générant aléatoirement en fonction de la clef aléatoire qui aura été choisie.
};
```

A ce stade, vu qu'on n'a pas fait de console.log, on ne voit rien se modifier par contre si on va dans l'ongle React du dev tools de Chrome on peut voir qu'à chaque nouveau click sur le bouton, c'est un nouveau state différent qui est créé contenant un auteur et une citation. Notre fonction fait donc exactement ce que nous souhaitions, elle génère un autre state en fonction d'une citation choisie au hasard dans la liste des citations contenue dans la fichier citations.js.

Pour obtenir l'affichage dans la page, on va reprendre en les modifiant légèrement les lignes que l'on avait enlever du code jsx tout à l'heure pour éviter des erreurs tant que la fonction n'était pas entièrement codée.

Voici donc le code complet de index.js à ce stade du développement:

``` javascript
import React from 'react'; // On importe React
import { render } from 'react-dom'; // On importe ReactDom pour le rendu, l'affichage de la page
import citations from './citations';// On importe le fichier citation à partir de son emplacement par rapport au fichier index.js donc ./ puisque dans le même dossier, suivi du nom de fichier sans son extension automatiquement reconnu par React
import './index.css'; // On importe la feuille de style lié au component

class App extends React.Component {

  state = {};

  genererCitation = event => {
    // On  transforme citations en Array et on récupère toutes les clefs de cet objet qui sont stockée dans la constante keyArray
    const keyArray = Object.keys(citations);
    console.log(keyArray); // Test qui permet à chaque click sur le bouton d'afficher le tableau reprenant les clefs du tableau citations
    // Un citation au hasard en utilisant la fonction floor (arrondir) et Math.random pour générer un nombre aléatoire * la longueur du tableau (array.length)
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    console.log(randomKey); //Test pour voir si à chaque clique de bouton, dans l'onglet console du dev tools de chrome, il affiche bien une clef de citation différente et alétoire à chaque click sur le bouton. Exemple citation 8, citation 4, citation 10 etc...
    this.setState(citations[randomKey]); // On définit notre State qui était rester vide jusqu'ici en le générant aléatoirement en fonction de la clef aléatoire qui aura été choisie.
  };

  render() {
    return (
      // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
      <div>
        <p>
          {/* On récupére le contenu du state citation+ auteur qui ne contient plus qu'une seule citation définie au hasard en fonction de sa clef (citation1, citation2, ...) stocké dans un tableau par notre fonction gerenerCitation */}
          {this.state.citation}
          <span>- {this.state.auteur}</span>
        </p>
        {/* Ici le e est une écriture abrégée pour dire event */}
        <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
      </div>
      )
  }
}

//On réalise le rendu du component App créé juste au dessus
render(
  <App />, // On va cherche notre component
  document.getElementById('root') // On indique où on veut qu'il soit afficher dans index.html
  );
```

Il nous reste cependant encore 2 problèmes à régler à ce stade. Le fait qu'il est possible que aléatoirement, la même citation puisse être choisie aléatoirement 2 fois de suite et donc ne pas modifier l'affichage malgrès l'appui sur le bouton par l'utilisateur. Le second problème a régler est le fait que au départ avant au chargement de la page avant le premier appui sur le bouton, le state est vide puisque son contenu n'est générer par la fonction genererCitation qui ne s'exécute que lors de l'évènement click sur le bouton. Ce qui provoque un écran vide lors du rafraichissement ou du premier chargement de la page.

Pour résoudre le problème du state vide au premier chargement, on peut donner au state une valeur par défaut en dur au state qui ne s'affichera qu'au démarrage ou au rafraichissement de la page. Dès que l'on clique sur le bouton, le contenu du state est remplacé par la citation générer aléatoirement par la fonction et une citation aléatoire est affichée. On peut de manière plus propre et interactive résoudre ce problème autrement en lançant la fonction qui indique le contenu du stat dès le premier affichage ou rafraichissement. Ce sera la matière du chapitre suivant.

``` javascript
class App extends React.Component {

  state = {
    citation: 'Coucou',
    auteur: 'Anthony'
  };
}
```

## Partie 4 : Les cycles de vie dans ReactJS

Dans ce chapitre on va régler les 2 problèmes qui se posait dans la version de notre générateur de citation dans l'état où nous l'avions laissé la dernière fois.

Problème à résoudre:

* Une même citation qui s'affiche 2 fois de suite lorsque l'on clique sur le bouton "Une autre citation"

* Un texte citation + auteur qui s'affiche en dur au lancement de la page ou lorsque l'on rafraichit la page. Nous voudrions que dès le lancement de la page, la fonction genererCitation soit lancée pour afficher directement une citation aléatoire au lieu d'un texte en dur qui est toujour le même "Coucou"- Anthony

### Etre certain que c'est chaque fois une fois une citation différente qui s'affiche et jamais 2 fois la même lorsque l'on appuie sur le bouton "Une autre citation"

On va procéder avec du javascript classique en vérifiant si la nouvelle citation que l'on veut passer dans cette ligne de code this.setState(citations[randomKey]); est la même que celle que l'on a actuellement dans notre State. Si elle est identique on demandera à la fonction de générer un nouveau nombre aléatoire pour afficher une autre citation jusqu'à ce que celle-ci soit différente de celle stockée actuellement dans le State.

On va donc écrire ce code avec une condition juste avant la ligne
```Javascript
this.setState(citations[randomKey]);
```
Ce qui nous donnera le code suivant qui évitera donc qu'une même citation sorte 2 fois de suite:

``` javascript
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
```

### Les cycles de vie de React c'est quoi?

Pour résoudre le second problème c'est à dire que l'on voudrait qu'une citation aléatoire soit affichée dès le lancement ou le rafraichissement de la page à la place d'un texte en dur, il faut parler des cycles de vie de React.

Les cycles de vie de React c'est quoi? Ce sont des moment où on peu lui dire que juste avant que l'application soit montée (se lance), exécute ce petit bout de code, ou juste après que l'application soit montée exécute ce petit bout de code, ou au moment où l'application reçoit une mise à jour, fait ce petit bout de code. Par exemple on pourrait demander à React à chaque fois que le State change joue une animation, ou à chaque fois que le State est mis à jour, sauvegarde le contenu du précédent State (ex: la dernière citation) dans la base de données,...

Ce que nous allons faire c'est demander à React juste avant que l'application se monte (ne soit chargée pour la première fois ou rafraichie), exécute la fonction genererCitation qui va remplir le State avec une citation aléatoire dès le lancement de la page ou de son rafraichissement. On insèrerea ce code dans le fichier index.js juste après la déclaration de state. On va donc créer au départ un State vide puisqu'il sera générer automatiquement au lancement de la page.

``` Javascript
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
        <p>
          {/* On récupére le contenu du state citation+ auteur qui ne contient plus qu'une seule citation définie au hasard en fonction de sa clef (citation1, citation2, ...) stocké dans un tableau par notre fonction gerenerCitation */}
          {this.state.citation}
          <span>- {this.state.auteur}</span>
        </p>
        {/* Ici le e est une écriture abrégée pour dire event */}
        <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
      </div>
      )
  }
}
```

Pour en apprendre plus sur les cycles de vie de React, je vous invite à vous rendre sur la page : https://reactjs.org/docs/react-component.html qui explique tout ce qu'il y a à savoir sur React.Component. Il s'agit de la documentation officielle. Les sections Mounting concerne le moment où la page est montée (chargée), Updating le moment d'une mise à jour, ...
Cette documentation est particulièremen importante si on désire aller plus loin dans sa connaissance de React

## Chapitre 5 : Les props ReactJS

Dans ce chapitre nous allons voir comment mieux structuré tous nos fichiers, car jusqu'ici, on a tout fait dans un seul fichier et ce qui serait bien c'est de diviser cela dans plusieurs fichiers pour que ce soit plus facilement maintenable, plus clair à lire et plus simple à gérer si vous travailler à plusieurs sur un même projet.

###  Comment bien organiser ses fichiers dans un code ReactJS

Notre générateur de citations fonctionne bien mais il y a encore moyen de l'améliorer en réorganisant notre code dans différents fichiers pour en faciliter la maintenance ou le partage du travail en équipe.

Dans le dossier src de notre dossier de travail, on va créer un nouveau sous-dossier appellé "components" et dans ce sous-dossier, on va créer un fichier appelé App.js.

On va partager notre code comme ceci:

* index.js s'occupera du rendu (lorsque l'on a des applications plus complexes, c'est également dans ce fichier que sera tout le systeme de routage (la gestion des url directement à l'intérieur de react). Ici ce n'est pas nécessaire car on a n'a besoin que d'une seule page pour afficher notre générateur de citations)

* App.js va être un components (c'est pourquoi on l'a placé dans un sous-dossier components)

On va copier tout le code que contient notre fichier index.js et le coller dans notre fichier App.js.
On supprime dans App.js la partie de code qui se charge du rendu car c'est le fichier index.js qui se chargera de cette partie.

```Javascript
//On réalise le rendu du component App créé juste au dessus
render(
  <App />, // On va cherche notre component
  document.getElementById('root') // On indique où on veut qu'il soit afficher dans index.html
  );
```

On peut donc aussi au début du fichier App.js supprimer la ligne qui import react-dom qui s'occupe du rendu gérer par index.js

```Javascript
import { render } from 'react-dom'; // On importe ReactDom pour le rendu, l'affichage de la page
```

On supprime aussi dans App.js la ligne qui importe la feuille de style index.css qui est déja importée dans index.js

```Javascript
import './index.css'; // On importe la feuille de style lié au component
```

Dans index.js, on va supprimer la ligne qui importe le fichier citation.js

```Javascript
import citations from './citations';// On importe le fichier citation à partir de son emplacement par rapport au fichier index.js donc ./ puisque dans le même dossier, suivi du nom de fichier sans son extension automatiquement reconnu par React
```

Par contre il va être nécessaire de modifier le chemin de l'import du fichier citations qui se trouve dans App.js car celui-ci a changer puisque maintenant App.js se trouve dans un sous-dossier et plus au même niveau que citations.js. Le nouveau code pour l'importation du fichier citations.js dans App.js est donc le suivant:

```Javascript
import citations from '../citations';// On importe le fichier citation à partir de son emplacement par rapport au fichier App.js qui se trouve dans le sous-dossier components donc ../ pour remonter d'un niveau est sortir du sous-dossier components puis / suivi du nom de fichier sans son extension automatiquement reconnu par React
```

Dans notre fichier App.js qui est une component il est une partie indispensable à tout les components que nous allons devoir ajouter pour permettre de l'exporter. On ajoute donc à la fin du code la ligne suivante

```Javascript
export default App; // permet d'exporter notre component App. C'est une partie indispensable dans tous les components.
```

Dans mon fichier index.js, je vais supprimer toute la partie qui fait partie du component App.js. Je supprime donc dans index.js une grand partie du code pour ne gardé donc dans index.js que le code suivant :

```Javascript
import React from 'react'; // On importe React
import { render } from 'react-dom'; // On importe ReactDom pour le rendu, l'affichage de la page
import './index.css'; // On importe la feuille de style lié au component

//On réalise le rendu du component App créé juste au dessus
render(
  <App />, // On va cherche notre component
  document.getElementById('root') // On indique où on veut qu'il soit afficher dans index.html
);
```
Par contre à ce stade, le programme va renvoyé une erreur pour nous indique "App is not define" car on appelle App.js dans le code de index.js à la ligne <App /> mais il ne sais pas où le trouver.En fait App.js est un component et donc doit avoir une partie de son code pour l'export mais dans la page index.js, il faut importer App.js. On doit donc ajouter dans le début du dossier juste avant l'import du css une ligne pour importer le component App en lui indiquant le chemin entre index.js et App.js soit ./components.App.

```javascript
import App from './components/App'; // On importe le component App.js à partir du sous-dossier components
```

Jusqu'à présent on a juste séparé la partie rendu (index.js) de la partie component (App.js). Par contre ce qui pourrait être intéressant ce serait de pouvoir afficher ma citation aléatoire à d'autres endroits de mon site. On va donc créer un component qui va juste reprendre la partie du rendu responsable de l'affichage de la citation aléatoire et que l'on va appeler citation.js et qui contiendra uniquement la partie responsable de l'affichage de ceci :

```Javascript
<p>
  {/* On récupére le contenu du state citation+ auteur qui ne contient plus qu'une seule citation définie au hasard en fonction de sa clef (citation1, citation2, ...) stocké dans un tableau par notre fonction gerenerCitation */}
  {this.state.citation}
  <span>- {this.state.auteur}</span>
</p>
```
On va donc couper cette partie de code dans index.js pour aller la coller dans le nouveau fichier citation.js que l'on va créer.

On va dans le sous-dossier components, on crée un nouveau fichier appellé citation.js et dans ce dossier on va mettre le code suivant:

```Javascript
import React from 'react';// On importe React

class Citation extends React.Component{ // On se crée une nouvelle class Citation qui contient au minimum un render qui va renvoyer du jsx
  render(){
    return(
      <p>
        {/* On récupére le contenu du state citation+ auteur qui ne contient plus qu'une seule citation définie au hasard en fonction de sa clef (citation1, citation2, ...) stocké dans un tableau par notre fonction gerenerCitation */}
        {this.state.citation}
        <span>- {this.state.auteur}</span>
      </p>
    )
  }
}
```

On va alors rencontrer plusieurs problème. Tout d'abord this.state n'existe pas, car on n'a pas de state. On va régler ce problème après.
On va également devoir importer le fichier citation.js dans App.js en ajoutant la ligne suivante dans les import en début du fichier App.js

```Javascript
import React from 'react'; // On importe React
import Citation from './Citation'; // On importe le fichier Citation (qui contient uniquement la citation et auteur)
import citations from '../citations';// On importe le fichier citation à partir de son emplacement par rapport au fichier index.js donc ./ puisque dans le même dossier, suivi du nom de fichier sans son extension automatiquement reconnu par React
```

Dans le fichier citation.js, il faut également créer un export pour que cela fonctionne, on ajoute donc le code suivant à la fin du fichier citation.js.

```Javascript
export default Citation;
```
A ce stade on a une erreur qui nous dit que Citation est bien importé mais pas utiliser. On va donc procéder comme on l'avait fait avec App pour appeller un component <Citation />. On aura donc dans le render du fichier App.js le code suivant:

```Javascript
render() {
  return (
    // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
    <div>
      <Citation /> On va donc appeller le component citation.js (components/citation.js)
      {/* Ici le e est une écriture abrégée pour dire event */}
      <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
    </div>
    )
}
```
Il reste toujours une erreur "Cannot read property 'citation' of null at Citations.render. Ce problème est lié au fait que dans le code de citation.js on fait référence à un state qui n'existe pas.

Pour corriger cette erreur on va devoir utiliser des props. Les props permettent en effet de passer des données d'un components à un autre. Des props peuvent permettre de passer une infinité de chose comme des fonctions, des objets, une chaîne de caractère, un nombre, ... On peut passer ce que l'on veut dans les props et ils arrivent fréquement qu'on utilise plusieurs props quand on a plusieurs choses à transmettre d'un component à un autre.On les différencie grâce à leur nom par exemple

### Création d'un props dans un component
<Citation details={this.state}/>

### Récupération d'un props dans un autre component
{this.props.details.citation}


Pour passer une props ont va tout simplement lui donner un attribut. Donc dans le fichier App.js on va modifier le code comme ceci:

```Javascript
render() {
  return (
    // Il est indispensable que la totalité de notre code html soit contenue dans une div globale car sinon on aura une erreur car la totalité du contenu html sera importé impérativement dans la div globale portant id "root" dans le fichier index.html
    <div>
      <Citation details={this.state}/> //On va donc appeller le component citation.js (components/citation.js). On passe toutes les données du State dans un props appelé details (on peut changer ce nom si on le souhaite). Le props details va donc transmettre tout le contenu du state à cet endroit
      {/* Ici le e est une écriture abrégée pour dire event */}
      <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
    </div>
    )
}
```

Maintenant il va falloir récupérer ce props dans le fichier citation.js. On fait cela avec le code suivant:

```Javascript
import React from 'react';// On importe React

class Citation extends React.Component{ // On se crée une nouvelle class Citation qui contient au minimum un render qui va renvoyer du jsx
  render(){
    return(
      <p>
        {/* On récupére le contenu du state citation+ auteur qui ne contient plus qu'une seule citation définie au hasard en fonction de sa clef (citation1, citation2, ...) stocké dans un tableau par notre fonction gerenerCitation */}
        {this.props.details.citation}
        {/* On récupère le props details qui est un objet contenant une citation et un auteur, et on précise qu'on ne veut sur cette ligne récupérer que la citation */}
        <span>- {this.props.details.auteur}</span>
        {/* On récupère le props details qui est un objet contenant une citation et un auteur, et on précise qu'on ne veut sur cette ligne récupérer que l'auteur */}
      </p>
    )
  }
}
export default Citation;
```
Voilà, l'application fonctionne à nouveau normalement grâce à l'utilisation du props details qui a permis d'exporter le contenu du state du component app.js au component citation.js.

Donc à chaque nouvel appui sur le bouton et également au lancement et au rafraichissement de la page, la fonction présente dans app.js appelée genererCitation est lancée. Cette fonction va choisir au hasard une citation + auteur en fonction de sa clef (citation1, citation2, ...) dans le fichier citations.js et ensuite va placer la citation selectionnée dans le state. Le contenu du state sera ensuite transmis du fichier App.js au fichier citation.js via un props appelé details.

 
