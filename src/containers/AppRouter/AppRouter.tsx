import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Accueil from "../../containers/Accueil";
import MentionsLegales from "../../containers/MentionsLegales";
import Faq from "../../containers/Faq";
import Connexion from "../../containers/Connexion";
import Protection from "../Protection";
import Compte from "../Compte";
import PageIntrouvable from "../PageIntrouvable";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/compte" component={Compte} />
          <Route path="/connexion/" component={Connexion} />
          <Route
            path="/protection-des-donnees-personnels/"
            component={Protection}
          />
          <Route path="/mentions-legales/" component={MentionsLegales} />
          <Route path="/faq/" component={Faq} />
          <Route component={PageIntrouvable} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
