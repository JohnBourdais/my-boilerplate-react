import React, { Component } from "react";
import { Link } from "react-router-dom";

class MentionsLegales extends Component {
  render() {
    return (
      <div>
        <h1 className="titre-principal">Mentions Légales</h1>
        <ul>
          <li>
            <Link to="/protection-des-donnees-personnels">
              Protection des données personnels
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MentionsLegales;
