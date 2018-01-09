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

3. Dans le fichier citations.js, chaque citation se présente de la même manière: 1 clef unique (citation1, citation2, citation3, ...) et à l'intérieur de chaque citation, il y a auteur: nom de l'auteur, et citation: contenu de la citation. On peut tout a fait ajouter d'autres citations à la suite de celles-ci pourvu qu'elle respecte la même syntaxe. 
