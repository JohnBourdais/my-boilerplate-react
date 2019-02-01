import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Accueil from '../../containers/Accueil';
import MentionsLegales from '../../containers/MentionsLegales';
import Faq from '../../containers/Faq';
import Connexion from '../../containers/Connexion';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/connexion/" component={Connexion} />
          <Route path="/mentions-legales/" component={MentionsLegales} />
          <Route path="/faq/" component={Faq} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
