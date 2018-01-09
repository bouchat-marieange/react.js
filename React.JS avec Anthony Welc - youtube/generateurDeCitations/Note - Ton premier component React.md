# Ton premier component ReactJS

Source: https://www.youtube.com/watch?v=_nMc8O04x2s&t=340s

Nous allons créer un générateur de citations:

Que fait cette appli:
* L'appli affiche la citation de manière aléatoire avec son auteur
* Quand on appuie sur le bouton "Une autre citation", l'appli affiche une autre citation

Télécharger le fichier de démarrage et décompresser-le à l'endroit où vous voulez créer votre fichier.
https://anthonywelc.com/tribu/  . Télécharger REACT Mini-Série: Fichiers de démarrage. cela permettra de travailler plus rapidement et de bénéficier d'une fichier contenant déja toutes une série de citations et d'un fichier css adapté.

Les logiciels et extensions présentées au précédents épisodes devront être installées: node.js, Extension chrome React Developer Tools (qui ajoute un onglet React à la console du navigateur), Babel à installer comme plugin de votre IDE, node.js, un IDE (Atom, SublimeText,...), un navigateur (Chrome, Firefox,...) et cmander (qui améliore l'affichage du terminal, uniquement si sous Windows)


Se placer dans le dossier que l'on a télécharger et dezipper (générateur de citation), ouvrir le terminal et taper la commande

````code
npm install
````
L'installation commence et va prendre 1 à 2 minutes.

On en profite pour ouvrir le projet dans notre IDE (Atom, SublimText, ...)

Lorsque l'installation est terminée, on constate qu'un nouveau dossier "node_modules" a été ajouter lors de l'installation. Ce sont toutes les dépendance dont notre proejet aura besoin pour  React et pour tous les petits scripts qu'il utilise.

Dans le fichier package.json se trouve référencer toutes les dépendance de notre projet, ainsi que les infos le concernant (nom, version, etc...), dépendance react et react-dom (pour l'affichage), react-script qui permet de lancer un petit serveur local.

Lancer le serveur local

Taper dans le terminal la commande suivante:

```
npm start
```
qui va lancer le serveur et ouvrir un nouvel onglet dans notre navigateur par defaut à l'adresse : http://localhost:3000/

Le terminal affiche le texte suivant:

```
Compiled successfully!

The app is running at:

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

```
Pour vérifier que cela marche bien, on va aller dans le dossier src de notre dossier de travail. On va ouvrir dans notre IDE le fichier index.js dans lequel est inscrit uniquement en commentaire pour l'instant // Code React

On va juste taper le code suivantà la suite de ce commentaire dans index.js pour voir si tout fonctionne :

```javascript
alert('coucou');
```
On enregistre et on va voir dans le navigateur. En principe une fenêtre d'alerte s'est affichée dans le navtigateur avec le message "coucou".
