// On indique React que notre component est un component. Quand on ne met pas ./ avant, par defaut, l'ordinateur va chercher par defaut dans le dossier node_modules que nodeJS à installer avec la commande react-create_app et un de ces dossier s'appelle React, c'est donc là qu'il va le charger sans que l'on ai besoin de lui indiquer tout le chemin d'accès.
import React from 'react';

export default class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}
