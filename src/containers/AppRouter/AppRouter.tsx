import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Accueil from "../../containers/Accueil";
import MentionsLegales from "../../containers/MentionsLegales";
import Faq from "../../containers/Faq";
import Connexion from "../../containers/Connexion";
import Protection from "../Protection";
import Compte from "../Compte";
import PageIntrouvable from "../PageIntrouvable";
import Configuration from "../Configuration";

class AppRouter extends Component {
  render() {
    return (
      <div className="content--main">
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/compte" component={Compte} />
          <Route path="/connexion/" exact component={Connexion} />
          <Route
            path="/protection-des-donnees-personnels/"
            exact
            component={Protection}
          />
          <Route path="/mentions-legales/" exact component={MentionsLegales} />
          <Route path="/faq/" exact component={Faq} />
          <Route path="/configuration/" exact component={Configuration} />
          <Route component={PageIntrouvable} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
