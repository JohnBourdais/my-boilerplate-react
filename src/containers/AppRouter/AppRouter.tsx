import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Accueil from '../../containers/Accueil';
import MentionsLegales from '../../containers/MentionsLegales';
import Faq from '../../containers/Faq';
import Connexion from '../../containers/Connexion';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
      <div>      
        <Route path="/" exact component={Accueil} />
        <Route path="/connexion/" component={Connexion} />
        <Route path="/mentions-legales/" component={MentionsLegales} />
        <Route path="/faq/" component={Faq} />
      </div>
    </Switch>
    );
  }
}

export default AppRouter;
