import React from 'react'; // On importe React
import { render } from 'react-dom'; // On importe ReactDom pour le rendu, l'affichage de la page
import App from './components/App'; // On importe le component App.js à partir du sous-dossier components
import './index.css'; // On importe la feuille de style lié au component

//On réalise le rendu du component App créé juste au dessus
render(
  <App />, // On va cherche notre component
  document.getElementById('root') // On indique où on veut qu'il soit afficher dans index.html
);
