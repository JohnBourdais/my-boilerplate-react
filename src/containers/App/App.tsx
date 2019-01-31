import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from '../../ressources/images/logo.svg';
import './App.css';


import Accueil from '../../containers/Accueil';
import MentionsLegales from '../../containers/MentionsLegales';
import Faq from '../../containers/Faq';
import Connexion from '../../containers/Connexion';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Accueil}/>
        <Route path='/faq' component={Faq}/>
        <Route path='/connexion' component={Connexion}/>
    </Switch>
    );
  }
}

export default App;
