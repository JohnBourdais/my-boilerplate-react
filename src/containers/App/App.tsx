import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Faq from '../../containers/Faq';
import Connexion from '../../containers/Connexion';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/connexion" component={Connexion} />
      </Switch>
    );
  }
}

export default App;
