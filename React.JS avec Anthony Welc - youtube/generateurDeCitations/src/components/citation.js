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
