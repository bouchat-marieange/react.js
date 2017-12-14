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

### Quelques règles à respecter pour coder en HTML dans ReactJS

* 1 seule div parente
* html parfait (pas de balise non fermée)
* Les balises autofermante doivent bien être fermée par un />
* le mot class doit être remplacer par classname car class est un terme déja utilisé par ReactJS
