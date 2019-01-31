import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="menu">
        <legend>Menu de navigation</legend>
        <ul>
          <li>
            <Link to="/accueil">Accueil</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
          <li>
          <Link to="/mentions-legales">Mentions Légales</Link>
          </li>
          <li>
          <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        </nav>        
      </div>
    );
  }
}

export default Menu;
