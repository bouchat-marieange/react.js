# REACTJS

Ceci est le parcours react.js proposé à BeCode:
https://github.com/becodeorg/Lovelace-promo-2/tree/master/Parcours/ReactJs

Site officiel de ReactJS
https://reactjs.org/

## Table des matières

### Initiation

1. Initiation
2. Commencement

Résultat du cours Application

### Projet

1. installation
2. Introduction
3. Dom
4. Props et State
5. Interaction entre component P1
6. Interaction entre component P2
7. Binding
8. LifeCycle
9. Deploiment
10. Animation

Fichier du cours Application (https://github.com/becodeorg/Lovelace-promo-2/tree/master/Parcours/ReactJs/TodoList)

### Exercice

1. Brief d'exercice

Fichier de début de coursChatBox
(https://github.com/becodeorg/Lovelace-promo-2/tree/master/Parcours/ReactJs/ChatBox/StartFileChatBox) Fichier de fin de coursChatBox (https://github.com/becodeorg/Lovelace-promo-2/tree/master/Parcours/ReactJs/ChatBox/EndFileChatBox)

## Règles de bases

* Analyser biena tout avant de vous lancer dans les étapes suivantes
* Ne copier collez pas, vous allerz perdre énormément de temps ...
* Les bouts de code mis un peu partout ne sont pas à prendre simplement comme ça, les exemples donnés sont souvent pas à metttre au même endroit (revenir à la première règle)
* Si vous ne comprenez pas c'est que vous allez trop vite, prenez votre temps
* Amusez-vous !

## Initiation

### React.JS, c'est quoi?

React.JS est une bibliothèque type MVC créée en 2013 par facebook, permettant de créer des interfaces utilisateur performantes.

### A quoi ça sert ? Pourquoi c'est bien ?

Avec l'avènement des SPA (Single-Page application ou en francais application web monopage : application web accessible via une page web unique dans le but d'éviter le chargement d'une nouvelle pagesà chaque action demadée et de fluidifier ainsi l'expérience utilisateur. Deux méthodes existent pour ce faire: l'ensemble des éléments de l'application est chargé (contenu, images, CSS et Javascript) dans une unique fichier HTML, soit les ressources nécessaires sont récupérées et affichées dynamiquement en fonction des actions de l'utilisateur.

L'enregistrement en local de la page définissant une application web monopage et la possibilité de continuer à l'exécuter en local est l'une des propriétés importorantes des applications web monopage qui les distingue des applications web standards qui reposent sur l'existence d'un serveur HTTP avec lequel elles échangent données, continuations applicatives et interfaces.

Quand les applications web monopages gèrent les données et permettent de les modifier, pour conserver ces données modifiées, il est nécessaire que ces appliications modifient leur code, c'est-à-dire: elles doivent être capapble de se modifier pour que la sauvegarde locale de l'état modifié de l'application (dont les données) soit persistant.

Donc avec l'avènement des £SPA, les applications web quasi "temps réel" telles que Gmail, Airbnb, Soundcloud ou encore Netflix, les frameworks et bibliothèques JS n'ont jamais eu autant la cote.

D'un côté, les utilisateurs sont de plsu en plus matures et demandeurs de ce type d'applications extrêmement satisfaisatntes en terme d'expérience. De l'autre coté la plupart des développeurs sont en quête de meilleures performances (fluidité de l'interface, scalabilité et réduction des coûts) et se plaisent à écrire du beau code (plaisir de coder, lisibilité, puissance et maintenablilité).

Difficile d'être passé à côté des technologies telles qu'AngularJS (le framework de Google), Backbone.js, Ember.js ou KnockoutJs.

L'utilisation massive de Javascript change la donne d'un point de vue SEO.

### So... WTF with Javascript?

Le principal problème de ces frameworks réside dans le fait que les contenus sont injectés coté client, après le chargement de la page côté serveur (à l'inverse de PHP par exemple) : si on regarde le code source, c'est le néant.

Dans ces circonstances, Googlebot ne pouvait pas crawler et indexer ces contenus injectés à posteriori : catastrophique donc d'un point de vue SEO! (apparamment ...)

Depuis peu, Google a annoncé que Googlebot allait dorénavant essayer d'interpréter les pages crawlées en exécutant JavaScript ... " Allait essayer de ..."

### We decided to try to understand pages by executing Javascript

Dans un billet datant du 23 mai 2014 Google délare que GoogleBot peut interpréter JavaScript (https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html) et par conséquent indexer le contenu jusqu'alors invisible (car généré côté client et non côté serveur, vous suivez hein ...).Cependant vous l'imaginez, à l'échelle du web, il s'agit d'un travail de titan...

### « It’s hard to do that at the scale of the current web, but we decided that it’s worth it. »

Du côté développeurs, de nombreuses initiatives pour permettre le crawl et l'indexation des contenus sainsi générés se sont développées mais restent néanmoins coûteurses ou a minima cocntraignantes dans le cycle de la vie d'un projet.

C'est là qu'intervient React, LA solution ! Vous suivez toujours ?

### C'est quoi React ?

React est une bibliothèque (un ensemble de méthode et fonctions) permettant de développer des interfaces ayant la particularité de changer perpétuellement: on peut penser à un module de commentaires en "temps réel" ou encore au Ticker Facebook (qui résume l'activité de vos amis, là aussi en quasi "temps réel")

![Ticker Facebook](https://camo.githubusercontent.com/90688586c8a8ab1b0c3e5365352d745923fe91ba/687474703a2f2f626c6f672e616c74696d612d6167656e63792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f30382f7469636b65722e706e67)

La force de React est e toujours trouver la meilleur façon de mettre à jour et d'afficher [rapidement] ces changements, sans que l'utilisateur ait besoin de recharger la page.

Ledéveloppement ainsi que la publication de cette bibliothèque résultent de la collaboration d'une bonne centaine de développeurs travaillant pour diverses société dont à  l'initiative Facebook et Instagram: plutôt sérieux donc !

### Les points forts de React

**« React is so fast because it never talks to the DOM directly. »**

**L'intelligibilité:** Le code produit est "propre" (simple à lire, à comprendre et à maintenir), sa lecture permet de voir immédiatement à quoi votre application va servir et ressembler.

**Les performances:** C'est l'une des fonctionnalités clés de React, le concept du Virtual DOM (https://reactjs.org/docs/refs-and-the-dom.html). React va s'attacher à ne traiter et à n'afficher que les changements dans une vue (en mettant de côté le reste de la vue qui lui, ne change pas).

**La communauté :** ReactJS a séduit rapdidement la communauté des développeurs JS. Et c'est sans parler de React Native qui de son côté permet de publier des applications natives IPhone (et Android prochainement) en écrivant du JavaScript. Ce qui par conséquent permet d'économiser des temsp de développement considérables.

**[HOT SEO] Isomorphisme et server-side rendering :** grâce à l'utilisation d'un serveurNode, le code va pouvoir être généré côté client ET côté serveur (un peu comme du PHP donc ... mais sans rechargement!) à la différence des autres bibliothèques et frameworks JS traditionnels (Backbone.js, AngularJS, Ember.js, etc...) qui de manière native exécute le code seulement côté cleint (dans le navigateur). Ce point fort est celui qui nous intéresse le plus d'un point de vue SEO car il résout la problèmatique de l'indexation des contenus (capacité à être crawlé et indexé) peulés uniquement côté client.

### Isomor... quoi ?

Retenez juste que le codeentre le client (votre navigateur) et le serveur est le même ! Et dit autrement "The backend and frontend share the same code" (représenté à droit sur le shéma)

![Client-side MVC ou Client+ Server MVC](https://camo.githubusercontent.com/f50c1f9188c9de2ad6abf45fe14c2caa1fc25821/687474703a2f2f626c6f672e616c74696d612d6167656e63792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f30382f69736f6d6f72706869736d652e706e67)

D'ailleurs React n'est pas la seule bibliothèque "embarquant" cette technologie. A ce jour on en dénombre déja uen bonne vingtaine telles que BirsBrisket, Cassis, Catberry, Chaplin, Derby, Ezel, Este, Flatiron, Fluxible, Invisible, jsblocks, Loopback, Lazojs, Loopback, Mojito, Sara.js, San Stack et Taunus.

Concernant la terminologie d'ailleurs, certains préfèrentn parler d'Universal JavaScript plutôt que d'isomorphisme. Il faut avouer que cette expression est plus simple à appréhendere.

« … this is purely anecdotal evidence, but when we use the word universal instead of isomorphic everyone gets it. »

### ReactJS ≠ Angular JS

« Lots of people use React as the V in MVC. »

Inutile des les comparer, React à la différence d'Angular JS n'est pas un framework.

Si la différence entre framework et bibliothèque vous obsède, n'hésitez pas à jeter un oeil à ces discussions.Pour les autres retenez juste que React n'impose pas d'architecture particulière à votre application et peut donc se greffer à n'importe quel projet utilisant d'autres technologiesweb (dont AngularJS), de manière complètmenet autonome.

**« React c’est juste la VUE…»**

### Comment fait-on?

On paye, ou on bricole ?

Si on n'a pas trop les moyens , on propose aux robots d'exploration une version HTML alternative (un snapshot) de ses pages grâce à Phantom.js. OUi,du cloaking ! C'est "sale" diront les puristes, difficile à maintenir , mais ça fonctionne, plutôt bien.

Sinon et si vous avez un peu de budget (ou un modèle économique qui tient la route) là c'est plutôt puissant et facile à mettre en place: ça s'appelle Prerender ou BromBone  pour ne citer qu'eux. Si le sujet "How to maike your JavaScript apps SEO-friendy" vous intéresse, cet article est sympa : http://odino.org/how-to-make-your-javascript-apps-seo-friendly/

(![How BromBone Works](https://camo.githubusercontent.com/6975a2ec6fa56b2aebeea2f27aac12c934fb7fd9/687474703a2f2f626c6f672e616c74696d612d6167656e63792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f30382f62726f6d626f6e652d73656f2e706e67)

### Avantages de ReactJS pour le SEO-friendy

La possibilité pour les robots de crawlere et d'indexer de manière native le contenu : o a tous les avantages du JS , sans les inconvénients ! Les temps de chargement favorables participent à une bonne expérience utilisateur. Happy users =  Gappy Google. Et c'est tout? Oui,pour ce qui est du SEO.Tout dépendra e ce que vous en ferez ensuite côté implémentations back-office. Etpour compléterl'analyse sur ce sujet je vous conseille dejeter un oeil à cet articles Zarck Argyle, développeur @Pinterest (https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644)

« If you have a highly dynamic application that needs to rerender frequently, and you want to avoid the heavy weight of template diffing, you’re looking at a grass-type opponent and ReactJS’s virtual DOM will be super effective. However, if you’re site doesn’t have those needs, CHOOSE SOMETHING ELSE! »

traduction:
« If you have a highly dynamic application that needs to rerender frequently, and you want to avoid the heavy weight of template diffing, you’re looking at a grass-type opponent and ReactJS’s virtual DOM will be super effective. However, if you’re site doesn’t have those needs, CHOOSE SOMETHING ELSE! »
«Si vous avez une application très dynamique qui a besoin d'un re-rendu fréquent, et que vous voulez éviter le poids du modèle, vous regardez un adversaire de type grass et le DOM virtuel de ReactJS sera super efficace. Cependant, si votre site n'a pas ces besoins, CHOISISSEZ QUELQUE CHOSE D'AUTRE! »

### Inconvénient de React ?

Pour faire simple, il n'y en a pas. Si on creuse un peu, on peut relever ceci:

La documentation progresse mais il y encore quelque temps, il n'était pas si simple de s'en sortir avec le seul Get starterd de Facebook. Facebook se réserve la possibilité de vous retirer la licence, le droit d'utiliser React. Ce sujet fait débat bien que naÎvement on peut se demande quel intérêt aurait Facebook d'adopter ce type de comportement.

### Qui utilise React ?

De plus en plus de société ! Pour parler des plus connues on peut bien sûr citer Facebook, Instagram mais également Yahoo, Adobe, Airbb, AdRoll, Asana, BBC, cEntury 21, Club Med, Dropbox, Feedly, Github, Khan Academy, KissMetrics, Netflix, Reddit, Saleforce, Twitter, WhatsApp et pleins d'autres (https://github.com/facebook/react/wiki/Sites-Using-React)



## Commencement

### Let's start with ReactJS

Pour commencer avec React, installez l'outil CLI Reacat (Create React App) et exécutez la commande pour créer une nouvelle application (attention votre nom d'appli doit être en minuscule):

````code
# Install the CLI tool (en positionnant le terminal par défaut à la racine)
npm install -g create-react-app

# Create an app (on créer l'application en positionnant le terminal à l'endroit où on le souhaite (un dossier contenant tous les dosssiers et fichiers est automatiquement créer))
create-react-app my-app-name
````

A l'issue de cette opération lorsque l'appli est créée, le terminal affiche le message suivant:

````code
Success! Created premiere_app_react at /home/user/Repo de moi/react.js/premiere_app_react
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd premiere_app_react
  npm start

Happy hacking!

````

Si on se place dans le nouveau dossier de notre application avec la commande cd nom_de_mon_appli et que on lance la commande npm start, une fenêtre s'ouvre dans le navigateur à l'adresse http://localhost:3000/

Et le terminal va afficher le texte suivant:

````code
Compiled successfully!

You can now view premiere_app_react in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.20.1.23:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
````

````code
# Install Dependencies (on entre dans le bon dossier et là on fait un npm install pour que npm installe toutes les dépendances nécessaire pour notre appli)
cd my-app-name
npm install
````

Après on fait npm start et une page s'affiche dans le navigateur à l'adresse http://localhost:3000/

Pour commencer sans base de fichier et pour bien comprendre, on va retirer toute la base de l'application, donc tout ce qu'il y a dans le sous-dossier src en tapant la commande suivante lorsque l'on se trouve dans le dossier de notre appli

````code
cd my-app-name
rm -f src/*
````

Vous pouvez également tester avec JSFiddle:
https://jsfiddle.net/reactjs/69z2wepo/

## The Basics

Les blocs de construction de base de React sont appelés composants. Toute l'application est une sorte de construction faites en légo, donc avec beaucoup de petit légo. On crée les différents blocs et l'application les utilises, les assembles les un avec les autres pour en faire une application. Cependant ces blocs peuvent recevoir des paramètres.

Voici l'exemple d'un composant à mettre dans le fichier Welcome.js que vous allez créer dans le dossier src:

````JavaScript
import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        Welcome
      </div>
    );
  }
}
````

Histoire de décomposer un peu ce qu'il se passe, pour commencer:

* import React, { Component } from 'react'; -> Import de la librairie react installer dans le dossier node_modules.
* export default class Welcome extends Component -> Création de la class et export de la classe pour l'imbriquer dans d'autres composants
* render() -> fonction dans react qui fais renvoie la vue.
*  className est la même chose que class en html mais react utilise deja le mot class donc petit changement (le comportement est le même)
* Par convention, le nom du composant, le nom du fichier, le nom de l'import,... s'appel de la même manière et commence par une majuscule pour faire plus simple)

Pour l'instant, sur la page, rien ne s'affiche parce que react n'a eu aucune instruction. Pour ce faire, il faut créer un composant qui va récupérer le composant principal pour l'affchicher grace au React-dom le tout dans le fichier index.js que vous créez aussi ainsi que le fichier index.css (dans le quel vous mettez ce que vous voulez en CSS)

````JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';

ReactDOM.render(<Welcome />, document.getElementById('root'));
````

Pour décomposer encore une fois :

* import React from 'react'; -> différent que la première fois parce que react n'a pas besoin des components ici
* import ReactDOM from 'react-dom'; -> C'est lui qui gère l'affichage dans le DOM
* import './index.css'; -> import du css (généralement c'est le seul endroit où le css doit être importer)
* import Welcome from './Welcome'; -> import du composant créé précédement (Il n'est pas écrit Welcome.js et c'est normal, par défaut nodejs le comprend, mais si l'extention est différente, il faut le préciser)
* ReactDOM.render(, document.getElementById('root')); -> ReactDOM.render() -> fonction pour afficher quelque chose et prend deux paramètre : Le premier est le composant à rendre, et le deuxième, l'endroit où le rendu ce fera. Dans le dossier public du projet se trouve un index.html dans lequel il n'y a qu'une div avec un id root, et c'est elle que react sélectionne pour afficher l'application.

### Tout l'intéret de react réside dans l'imbrication des composants

Comme dit précédemment, React est une construction légo mais pour le moment l'application n'a qu'une seule pièce. Crée un deuxième composant appelé "Hello" dans le fichier Hello.js toujours dans le dossier src :

````JavaScript
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
````

Maintenant que le deuxième composant est créé (Hello.js), il faut l'importer et l'appeler dans le premier composant (Welcome.js) : Pour appeler un composant, comme dans l'index.js (<Nom_Du_Composant/>)).

Voici le code à placer dans le fichier Welcome.js

````JavaScript
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
````
Si tout va bien, sur le navigateur "Hello" devrait apparaître. Il faut au préalable aller dans votre dossier de travail et taper la commande npm start pour lancer le serveur et afficher le contenu de l'adresse http://localhost:3000/

Ce que react permet aussi, c'est d'envoyer d'un composant à un autre des paramètres, de cette manière (toujours dans le fichier Welcome.js)

````JavaScript
import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Hello parametre={'HelloWorld'} />
      </div>
    );
  }
}
````
Le paramètre a été envoyé au composant enfant et il reste à aller chercher le paramètre de l'autre côté. (un paramètre en react est appelé un "props")

Le code suivant est donc à placer dans le fichier Hello pour indiquer qu'on l'autorise à exporter des paramètres à un autre composant.

````JavaScript
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        {this.props.parametre}
      </div>
    );
  }
}
````

### Quelques règles à respecter pour coder en HTML dans ReactJS

* 1 seule div parente
* html parfait (pas de balise non fermée)
* Les balises autofermante doivent bien être fermée par un />
* le mot class doit être remplacer par classname car class est un terme déja utilisé par ReactJS

Voici un exemple de html dans un fichier react:

````JavaScript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
````

## Code commenté avec différentes versions des fichiers

**index.js**

````JavaScript
// import React from 'react'; //différent de import React, {Component} from 'react'; parce que que cette fois react n'a pas besoin de components
// import ReactDOM from 'react-dom'; // C'est lui qui gère l'affichage dans le DOM
// import './index.css'; // import du css (généralement c'est le seul endroit où le css doit être importer - certains codeurs place le css dircectement dans le fichiers html de chaque components ou dans des dossiers à part contenant le fichier js du component et le fichier css uniquement lié au component et portant le même nom que le components de manière à rendre chaque component totalement indépendants et réutilisable dans d'autres projets plus facilement.)
// import Welcome from './Welcome'; // import du composant créé précédement (il n'est pas écrit Welcome.js et c'est normal, par défaut node.js le comprend, mais si l'extension est différente et n'est pas du js, il faut le préciser)
//
// ReactDOM.render(<Welcome />, document.getElementById('root')); // fonction pour afficher quelque chose qui prend 2 paramètres. Le premier paramètre est le composant à rendre, et le deuxième paramètre, l'endroit où le rendu se fera. Dans le dossier public du projet se trouve un index.html dans lequel il n'y a qu'une div avec un id root, et c'est elle que react selectionne pour afficher l'application.



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';

ReactDOM.render(<Welcome />, document.getElementById('root'));
````


**Hello.js**

````JavaScript
// import React, { Component } from 'react';// Importe la librairie react installée dans le dossier node_modules
//
// export default class Hello extends Component {// Création de la class Hello et export de la classe pour l'imbriquer dans d'autres composants
//   render() {// fonction dans react qui renvoie la vue
//     return (
//       <div className="App"> // classname est la même chose que class en html mais react utilise déja le mot class donc petit changement (le comportement est le même)
//         Hello
//         {this.props.parametre} // On receptionne les paramètre d'un composant hello dont le contenu à été défini dans le fichier Welcome.js et dont la valeur est HelloWorld
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';// Importe la librairie react installée dans le dossier node_modules
//
// export default class Hello extends Component { // Création de la class Hello et export de la classe pour l'imbriquer dans d'autres composants
//   render() {// fonction dans react qui renvoie la vue
//     return (
//       <div className="App">
//         Hello (ce mot se situe dans le fichier Hello.js et est affiché grâce à son importation dans Welcome.js puis son affichage gérer dans index.js)
//         <br />
//         {this.props.parametre} // Le paramètre qui s'appelle parametre et qui contient HelloWorld a été créer et envoyé au fichier Hello.js à partir du fichier Welcome.js)
//         {this.props.image} // Le paramètre qui s'appelle image et qui contient url de l'image a été créer et envoyé au ficherr Hello.js à partir du ficheir Welcome.js, il affiche l'url de l'image uniquement soous forme de texte et pas l'image elle-même
//         <img src={this.props.image} alt="bsdlifhs" /> // Pour intégré l'image sous forme d'image, il faut récupéré le paramètre image contenant l'url de l'image et le placer dans une balise html avec l'attribut alt en + pour améliorer l'accessibilité
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
        <br />
        {this.props.parametre}
        <br />
        {this.props.image}
        <br />
        <img src={this.props.image} alt="bsdlifhs" />
      </div>
    );
  }
}
````


**Welcome.js**

````JavaScript
// import React, { Component } from 'react'; // Importe la librairie react installée dans le dossier node_modules
// import Hello from './Hello'; // importer le deuxième composant Hello das le premier composant welcome
//
// export default class Welcome extends Component {// Création de la class Welcome et export de la classe pour l'imbriquer dans d'autres composants
//   render() { // fonction dans react qui renvoie la vue
//     return (
//       <div className="App"> // classname est la même chose que class en html mais react utilise déja le mot class donc petit changement (le comportement est le même)
//         Welcome
//         <Hello /> // On appelle le deuxième composant Hello  dans le premier composant Welcome sous la forme <Nom_Du_Composant/>
//         // <Hello parametre={'HelloWorld'} /> // On envoie les paramètre d'un composant hello à un à autre composant Welcome
//       </div>
//     );
//   }
// }


//Seconde version

// import React, { Component } from 'react';
// import Hello from './Hello';
//
// export default class Welcome extends Component {
//   render() {
//     return (
//       <div className="App">
//         Welcome (ce mot se situe dans le fichier Hello.js)
//         <Hello parametre={'HelloWorld'} /> // ici on appelle le fichier Hello et on lui envoi un paramètre qui s'appelle parametre qui contient le texte HelloWorld
//         <Hello image={'https://s3.amazonaws.com/owler-image/logo/bodecode-technology_owler_20160301_220443_original.png'} parametre={'HelloWorld'} />
//         //ici on appelle Hello.js et on lui envoie plusieurs paramètres imgage (qui contient l'url d'une image) et paramètre qui continent le texte HelloWorld
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        Welcome
        <Hello parametre={'HelloWorld'} />
        <Hello image={'https://s3.amazonaws.com/owler-image/logo/bodecode-technology_owler_20160301_220443_original.png'} parametre={'HelloWorld'} />
      </div>
    );
  }
}
````

**index.html (situé dans le dossier "public" du dossier de travail)**

/*root fait référence à un id par defaut appliqué à la div principale du document index.html qui se trouve dans le dossier "public" du dossier de travail.*/
#root
{
  font-size: Arial, sans-serif;
  font-weight: bold;
  font-style: italic;
  background-color: blue;
}

Voilà maintenant que vous possédez les bases , vous êtes prêts à vous lancer dans un réel projet react !



















------------------------- En suspend le temps d'intégrer le reste de la théorie avec le Chat box -------------

## Premier Site

Pour ce premier projet, vous allez reproduire une onepage à l'identique de celui-ci : One page = https://html5up.net/photon

L'objectif est de s'habituer à créer des components et à les imbriquerr de la bonne façon, c'est à dire de cette manière:

![Imbrication component one-page](https://camo.githubusercontent.com/f0ec54d6a1c3438a9a0b5fcb29f44455289d3101/687474703a2f2f6d616b657465612e636f2e756b2f696d616765732f323031342d30332d30352d726f627573742d7765622d617070732d776974682d72656163742d706172742d312f776972656672616d655f6465636f6e73747275637465642e706e67)

L'intérêt n'est pas de faire transiter des informations mais juste d'imbriquer les components. Donc nous n'allons utiliser que 5% de ce que React est capable de faire. Ne reproduisez que l'aspect graphique.
Le principe étant de créer un grand nombre de components de les mettre dans un sous-dossier et de les appeller pour l'affichage dans leur ordre d'apparition. Il est important de bien nommé les components de manières à ce que le code soit plus facilement compréhensible.
Le contenu html et le css peut être copier-coller directement à partir du modèle télécharger à l'adresse https://html5up.net/photon contenant le modèle

A vous de jouer!

Marche à suivre :

1. Créer une nouvelle appli en se positionnant où on le souhaite sur son disque dur (le dossier du projet sera automatiquement créer), ouvrir le terminal à cet endroit et taper la commande

````code
create-react-app one_page
````

Lorsque cette étape est terminée, le terminal affiche ce message:

````code
Success! Created premiere_app_react at /home/user/Repo de moi/react.js/premiere_app_react
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd premiere_app_react
  npm start

Happy hacking!
````

On peut alors taper la commande npm start pour lancer le serveur :

````code
npm start
````

Une page à l'adresse http://localhost:3000/ s'ouvre automatiquement dans notre navigateur et le terminal affiche le message suivant:

````code
Compiled successfully!

You can now view one_page in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.20.1.23:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

````

Créer un dossier "components" à la racine du dossier de travail pour contenir tout les composants.js de la page et les fichiers.c
ss portant le même nom que les composants.js et liés à eux.

Faire une maquette papier du site d'exemple pour définir tous les composants, leur donner un nom explicite et voir de quel manière ils sont imbriqués les uns dans les autres.

Créer dans le dossier components les différents components que l'on a définis et les fichiers css correspondant. Placer à l'interieur par copier coller le contenu html que l'on reprend dans le dossier zip télécharger depuis l'exemple de la page.

Ajouter le code nécessaire pour importer et exporter les components dans index.js et voir comment faire pour liés les css des différents components(est-ce que cela passe par des link dans index.css  ou est-ce qu'il faut linker chaque css au composant et l'import du css se fait en même temps que l'import du composant dans index.js)

Placer tout le code nécessaire dans index.js pour qu'il puisse générer le fichier index.html qui se trouve dans le dossier "public" du dossier de travail.

Lancer npm start pour vérifier le contenu, ajuster et corriger les éventuelles erreurs.



## SASS (en suspend pour l'instant - notes ok à mettre en pratique)

Il est bien sure possible de faire du Sass avec React mais pour faire ça, il va falloir faire quelques manipulation:

Dans une application React fonctionnel, se positionner avec le terminal dans l'appli et taper les commandes suivantes:

````code
cd your-app
mkdir src/Assets
````

````code
npm install node-sass --save
npm install npm-run-all --save
````

* Créer un fichier style.css dans le dossier Assets qui est dans le dossier src
* Modifier le package.json manuelement:

````json
"scripts": {
    "build-css": "node-sass src/Assets/style.scss -o src/Assets/",
    "watch-css": "npm run build-css && node-sass src/Assets/style.scss -o src/Assets/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
}
````

Une fois les modifications apportées, il va fallooir aussi modifier le fichier css que react va chercher (normalement dans index.js) et modifier l'import "import './App.css';" par "import './Assets/style.css';"  Supprimer le  "import './App.css';" dans le App.js

Si tout est fais correctement, maintenant vous pouvez faire du Sass dans votre projet react !





--------------------- En suspend à poursuivre après avoir pris connaissance du reste de la théorie -------------------

# Projet

## Installation

Pour travailler en React, nous allons avoir besoin d'un environnement de travail principalement basé sur Node.js. S'il n'est pas déjà installé, go on the terminal

````code
sudo apt-get update
sudo apt-get install nodejs npm
````

## Create React App

* Crée un dossier de travail pour React dans lequel on mettra tous les projets.
* Installe et crée ton projet React avec le terminal.

Enfin utilise la commande "create-react-app" en global. Cette commande est là pour créer le squelette de notre application, on pourrait très bien le faire à la main mais c'est une perte de temps.

````code
npm install -g create-react-app
````








------------------------- En suspend le temps d'intégrer le reste de la théorie avec le Chat box -------------

## Premier Site

Pour ce premier projet, vous allez reproduire une onepage à l'identique de celui-ci : One page = https://html5up.net/photon

L'objectif est de s'habituer à créer des components et à les imbriquerr de la bonne façon, c'est à dire de cette manière:

![Imbrication component one-page](https://camo.githubusercontent.com/f0ec54d6a1c3438a9a0b5fcb29f44455289d3101/687474703a2f2f6d616b657465612e636f2e756b2f696d616765732f323031342d30332d30352d726f627573742d7765622d617070732d776974682d72656163742d706172742d312f776972656672616d655f6465636f6e73747275637465642e706e67)

L'intérêt n'est pas de faire transiter des informations mais juste d'imbriquer les components. Donc nous n'allons utiliser que 5% de ce que React est capable de faire. Ne reproduisez que l'aspect graphique.
Le principe étant de créer un grand nombre de components de les mettre dans un sous-dossier et de les appeller pour l'affichage dans leur ordre d'apparition. Il est important de bien nommé les components de manières à ce que le code soit plus facilement compréhensible.
Le contenu html et le css peut être copier-coller directement à partir du modèle télécharger à l'adresse https://html5up.net/photon contenant le modèle

A vous de jouer!

Marche à suivre :

1. Créer une nouvelle appli en se positionnant où on le souhaite sur son disque dur (le dossier du projet sera automatiquement créer), ouvrir le terminal à cet endroit et taper la commande

````code
create-react-app one_page
````

Lorsque cette étape est terminée, le terminal affiche ce message:

````code
Success! Created premiere_app_react at /home/user/Repo de moi/react.js/premiere_app_react
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd premiere_app_react
  npm start

Happy hacking!
````

On peut alors taper la commande npm start pour lancer le serveur :

````code
npm start
````

Une page à l'adresse http://localhost:3000/ s'ouvre automatiquement dans notre navigateur et le terminal affiche le message suivant:

````code
Compiled successfully!

You can now view one_page in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.20.1.23:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

````

Créer un dossier "components" à la racine du dossier de travail pour contenir tout les composants.js de la page et les fichiers.c
ss portant le même nom que les composants.js et liés à eux.

Faire une maquette papier du site d'exemple pour définir tous les composants, leur donner un nom explicite et voir de quel manière ils sont imbriqués les uns dans les autres.

Créer dans le dossier components les différents components que l'on a définis et les fichiers css correspondant. Placer à l'interieur par copier coller le contenu html que l'on reprend dans le dossier zip télécharger depuis l'exemple de la page.

Ajouter le code nécessaire pour importer et exporter les components dans index.js et voir comment faire pour liés les css des différents components(est-ce que cela passe par des link dans index.css  ou est-ce qu'il faut linker chaque css au composant et l'import du css se fait en même temps que l'import du composant dans index.js)

Placer tout le code nécessaire dans index.js pour qu'il puisse générer le fichier index.html qui se trouve dans le dossier "public" du dossier de travail.

Lancer npm start pour vérifier le contenu, ajuster et corriger les éventuelles erreurs.



## SASS (en suspend pour l'instant - notes ok à mettre en pratique)

Il est bien sure possible de faire du Sass avec React mais pour faire ça, il va falloir faire quelques manipulation:

Dans une application React fonctionnel, se positionner avec le terminal dans l'appli et taper les commandes suivantes:

````code
cd your-app
mkdir src/Assets
````

````code
npm install node-sass --save
npm install npm-run-all --save
````

* Créer un fichier style.css dans le dossier Assets qui est dans le dossier src
* Modifier le package.json manuelement:

````json
"scripts": {
    "build-css": "node-sass src/Assets/style.scss -o src/Assets/",
    "watch-css": "npm run build-css && node-sass src/Assets/style.scss -o src/Assets/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
}
````

Une fois les modifications apportées, il va fallooir aussi modifier le fichier css que react va chercher (normalement dans index.js) et modifier l'import "import './App.css';" par "import './Assets/style.css';"  Supprimer le  "import './App.css';" dans le App.js

Si tout est fais correctement, maintenant vous pouvez faire du Sass dans votre projet react !





--------------------- En suspend à poursuivre après avoir pris connaissance du reste de la théorie -------------------

# Projet

## Installation

Pour travailler en React, nous allons avoir besoin d'un environnement de travail principalement basé sur Node.js. S'il n'est pas déjà installé, go on the terminal

````code
sudo apt-get update
sudo apt-get install nodejs npm
````

## Create React App

* Crée un dossier de travail pour React dans lequel on mettra tous les projets.
* Installe et crée ton projet React avec le terminal.

Enfin utilise la commande "create-react-app" en global. Cette commande est là pour créer le squelette de notre application, on pourrait très bien le faire à la main mais c'est une perte de temps.

````code
npm install -g create-react-app
````

Le terminal affiche le texte suivant lorsque l'opération est terminée:

````code
user@nb25:~/Desktop/Repo de moi/React.js/seconde_app$ create-react-app serie

Creating a new React app in /home/user/Repo de moi/React.js/seconde_app/serie.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> uglifyjs-webpack-plugin@0.4.6 postinstall /home/user/Repo de moi/React.js/seconde_app/serie/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js

+ react-dom@16.2.0
+ react-scripts@1.0.17
+ react@16.2.0
added 1151 packages in 99.431s

Success! Created serie at /home/user/Repo de moi/React.js/seconde_app/serie
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd serie
  npm start

Happy hacking!
````

Se placer à l'intérieur du dossier en tapant la commande (cd serie) pour se placer dans le dossier puis npm start pour lancer react et ouvrir un nouvel onglet de visualisation dans le navigateur à l'adresse http://localhost:3000/

````code
cd serie
npm start
````

On peut aussi taper cd serie (serie est nom du dossier) qui permet de positionner dans le dossier et puis la commande suivante.

````code
npm start
````

Le terminal affiche le texte suivant à la fin de l'opération

````code
Compiled successfully!

You can now view serie in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.20.1.23:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

````

Et ouvre un nouvel onglet dans le navigateur par default à l'adresse http://localhost:3000/ qui affiche une page basique contenant:  le logo de react, et le texte "Welcom to React - To get started, edit src/App.js and save to reload." Cette page basique c'est notre application. npm start met en place un système de livereloading pour qu'à chaque fois qu'on sauve un fichier, l'appli se mette à jour sans devoir recharger la page.

Pour tester, modifie la ligne "Welcome To react" dans App.js (qui se trouve dans le dossier src) par un autre titre puis vérifie dans le navigateur que tout ce change automatiquement sans refresh.

## Introduction

React est une view library crée par Facebook et Instagram. React se limite à modifier la vue et utilise principalemenent un système avec des components.

### Qu'est-ce qu'un component?

Un component n'est qu'un pbout de code qui peut être un simple bouton ou même toute une application

![React](https://camo.githubusercontent.com/50b2ebe0697dc0b78d4c81a711c3ee394377f20f/687474703a2f2f6e697472616a6b612e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30382f75696d6f636b7363726970742e706e67)

Dans l'image ci-dessus, on peut voir les différents components de notre application, qui va du simple EmployeeList jusqu'à L'app.

Donc dans cette interface de gestion professionnelle qui est à la fois, sur la gauche un component avec un bouton, un header et une liste dont chaque élément est un component. Mais on peut encore décomposer la liste d'meployé avec le componenet EmployeeListItem qui contient trois components: Profil Photo, Profil nom, Profil post. On va voir avec React comment on eut partir de petit component tout simple pour en faire une interface complète.

React n'est aps le seul dans sa categorie, et d'autres font parfois beaucoup plus que lui. Par exemple Angular ou Backbone qui sont de "vrais" framework MVC. Il y a aussi le nouvel ELM.

## Créer un composant React

Réact permet de créer des views de manière dynamique plutôt que statique.

Pour notre premier composant, on va créer une class:

````Javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
````

Nous avons là notre premier component React qui est en fait un objet, qui implémente la méthode render, et retourne quelque chose qui ressemble à du du HTML mais qui ne l'est pas.

Normalement en HTML on utilise la class pour donner un nom à notre élément et pour pouvoir le selectionner. Ici on utilisera dans le HTML non pas **class** mais **className**, parce que React utilise déja Class. Donc pour ne pas confondre, utilise className lorsque tu veux faire du HTML dans une class React (de toute façon si ce n'est aps le cas àa te fera une bonne grosse erreur !).

Le HTML que vous voyez s'appelle donc le **JSX (Javascript Extension)**. Nous allons voir en détail pourquoi React fonctionne de la sorte avec HTML.

Crée un fichier Welcome.js dans le dossier "components" préalablement créer par tes soins à la racine du dossier de travail, et colle le code suivant dedans. Regarde ce qui se passe dans le navigatgeur.

Rien ne se passe dans le navigateur c'est normal ! On a créé un component mais on n'a pas dis à notre application de l'afficher. POur faire ça, on va va retourner à la base de notre component qui est App.js et appeler le component Welcome, à l'endroit où on veut qu'il s'ajoute (en quelque sorte comme un include) mais dans le render. Tout ce qui se passe dans le render sera tout ce qui s'affiche à l'écran.


Il y a quelques règles de base à retenir pour mettre un component dans notre vue:

* Un component doit toujours contenir une methode render dans laquelle se trouve un return
* Dans le return, on met le **JSX** mais il ne peut y avaoir qu'une seule div principale. C'est à dire qu'il y a une seule div qui contient et englobe obligatoiremement toutes les autres divs sinon ça ne fonctionne pas.

Exemple:

Ceci est la bonne façon de faire

````javascript
<div className="main">

  <div className="container">
  bonjour
  </div>

  <div className="container">
  Aurevoir
  </div>

</div>
````

Ceci est la mauvaise façon de faire

````javascript
<div className="main">
bonjour
</div>

<div className="container">
Aurevoir
</div>
````

* Il faut aussi que l'on importe notre componant dans le fichier où l'on veut qu'il apparaisse
* Il faut qu'on exporte le component qu'on doit afficher

Donc, dans App.js on ajoute (importer notre component dans le fichier où l'on veut qu'il apparaisse)

````javascript
    import Welcome from './component/Welcome';// On importe notre class "Welcome" de ./ (dans le même dossier) - React comprend que c'est du JS (inutile de d'indiquer Welcome.js, par contre si c'est un autre langage, il faut lui préciser)
````

En français, on importe notre class "Welcome" -> de  -> ./ (dans le même dossier) -> Welcome (ce qui revient à dire Welcome.js, mais React comprend que c'est du js sans que l'on doivent lui indiquer, par contre si le fichier est dans un autre langage, il faut lui préciser)

Si on ajoute le import, ça fait une erreur de moins mais il nous en reste encore 2 à résoudre.

Dans Welcome.js, il faut qu'on lui dise qu'on veut exporter. Il y a 2 manière de faire:

````javascript
class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}

export default Welcome;
````

ou

````javascript
export default class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}
````

Et là, il ne nous reste plus qu'une seule étape à réaliser, c'est de dire à notre projet que notre component est un component en ajoutant tout au début du fichier Welcomee.js le code suivant:

````javascript
import React from 'react';
````

Avec ce code, on indique React que notre component est un component. Quand on ne met pas ./ avant, par defaut, l'ordinateur va chercher par defaut dans le dossier node_modules que nodeJS à installer avec la commande react-create_app et un de ces dossier s'appelle React, c'est donc là qu'il va le charger sans que l'on ai besoin de lui indiquer tout le chemin complet pour y accéder.

Si tout s'est bien passé, on devrait avoir notre application qui tourne correctement avec notre tout premier component!
