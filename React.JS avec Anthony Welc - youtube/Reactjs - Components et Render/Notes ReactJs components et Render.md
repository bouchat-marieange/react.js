# ReactJs - Component et render

Source tuto youtube: https://www.youtube.com/watch?v=bTTjQzrYuFk&t=7s

Pour utiliser React, il faut charger plusieurs choses et les linker dans la partie head de notre fichier html avec des balises scripts.

Nous aurons besoin pour utliser ReactJs de :

* React
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.min.js"></script>

* React DOM (qui se charge de l'affichage)
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.min.js"></script>

* Babel (librairie qui permet de traduire du javascript ES6 en ES5)
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>

Voici le code de notre fichier fonction.html que nous allons étudier ensemble:

````html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
  </head>
  <body>

    <div id="main">
    	<!-- C'est ici que React se mettra. -->
    </div>

    <script type="text/babel"> // On indique à l'application quelle va devoir utiliser babel pour que le contenu soit traduit.

  		ReactDOM.render(<h1>Hello World</h1>, document.getElementById('main'));

    </script>

  </body>
</html>
````

Dans le body de la page on place une div à laquelle on donne id="main". C'est dans cette div que viendra se placer tout le code React. En dehors de la description html de la div, rien ne sera écrit en html à l'intérieur de la div, tout le contenu sera charger en javascript via React. Tout les éléments html vous être chargé par React.

Nous allons voir maintenant comment afficher quelque chose et également ce que sont les components. Les components sont plusieurs petits bout de code qui ont un usage précis (par exemple un component pour le header, colonne à droite, bloc de texte). Ce sont des morceaux de code qui peuvent être réutilisables à plusieurs endroits et qui se mettent à jour les uns par rapport au autres. Nous allons donc voir comment créer un component et l'afficher.

Pour afficher quelque chose en React voici la marche à suivre (toujours entre les balise script babel, on inscrit le code suivant):

```javascript
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('main'));
```

Dans ce code on peut placer un component que React va afficher, mais pour le test nous allons nous contenter d'afficher la balise html <h1> avec un titre, suivi de la commande connue en javascritp .getElementById('main')); et on affiche donc ce titre h1 dans la page l'intérieur des balises portant l'id "main" que nous avons précédement créé. En gros on dit je veux afficher ça à cet endroit ci.

Mais bon on ne va pas écrire tout notre code html à cet endroit, C'est pour cette raison que l'on va créer un composant qui contiendra notre code HTML et qui sera affiché ensuite.

L'avantage des composants c'est qu'il peut y en avoir plusieurs, qu'on peut les utiliser à plusieurs endroits et chaque composé peut incorporé d'autres composants dedans. React c'est essentiellement cela, des composants dans des composants,... et quand un page va se mettre à jour, il n'y a que l'état précis du composant précis qui va se mettre à jour ce qui évite de recharger toutes la page, ce qui permet d'obtenir des applications plus rapides.

Pour créer un composant on procède comme ceci:

````html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
  </head>
  <body>

    <div id="main">
    	<!-- C'est ici que React se mettra. -->
    </div>

    <script type="text/babel">

    	var App = React.createClass({
    		render: function() {
    			return (
    				<div> //Les éléments JSX doivent être tous contenu dans une seule balise
						<h1>Hello World</h1>
						<p>C est du React !</p>
					</div>
    			)
    		}
    	});

  		ReactDOM.render(<App />, document.getElementById('main'));
    </script>

  </body>
</html>
````

On crée une var qui porte le nom du composant (commençant par une majuscule par convention). On créer une class React qui va contenir une fonction qui va retourner quelque chose (return) et donc l'afficher dans le cas présent grâce au render. Attention tous les balises JSX (html doivent être placée dans une seule balise globale.

**En résumé:**

On crée un composant (var App),  à  l'intérieur du composant on retourne dans la fonctioon render (fonctionnalité React qui permet de faire un rendu, un affichage), avec du JSX à l'interieur (JSX c'est simplement du HTML que l'on peut utiliser dans du javascript). Ensuite on appelle notre ReactDOM.render dans lequel on appelle notre composant (<App />) et ensuite, on indque on veut le mettre, où on veut qu'il apparaisse(document.getElementById('main').
