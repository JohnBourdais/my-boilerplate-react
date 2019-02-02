import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/compte/creation">Création de compte</Link>
            </li>
            <li>
              <Link to="/connexion">Connexion</Link>
            </li>
            <li>
              <Link to="/protection-des-donnees-personnels">
                Protection des données personnels
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales">Mentions Légales</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/configuration">Configuration</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
