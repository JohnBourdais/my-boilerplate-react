import React, { Component } from "react";

class Configuration extends Component {
  render() {
    return (
      <div>
        <h1 className="titre-principal">Configuration</h1>
        <ul className="configuration">
          <li>
            <p>
              <span className="configuration--nom">
                REACT_APP_WEBSITE_NAME :
              </span>
              <span className="configuration--valeur">
                {process.env.REACT_APP_WEBSITE_NAME}
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="configuration--nom">REACT_APP_VERSION :</span>
              <span className="configuration--valeur">
                {process.env.REACT_APP_VERSION}
              </span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Configuration;
