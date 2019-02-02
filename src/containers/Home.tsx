import React, { Component } from 'react';
import Image from '../components/Image/Image';
import Titre from '../components/Titre/Titre';

class Home extends Component {
  render() {
    return (
      <div>
        <Titre titre="Accueil" />
        <h2>Appel avec tous les paramètres</h2>
        <Image
          source="https://dummyimage.com/600x400/000000/fff"
          alt="Mon message alternatif"
        />
        <h2>Appel avec certains paramètres</h2>
        <Image source="https://dummyimage.com/600x400/000000/fff" />
      </div>
    );
  }
}

export default Home;
