import React, { Component } from "react";

class Configuration extends Component {
  render() {
    return (
      <div>
        <h1>Configuration</h1>
        <ul>
          <li>
            <p>REACT_APP_WEBSITE_NAME : {process.env.REACT_APP_WEBSITE_NAME}</p>
          </li>
          <li>
            <p>REACT_APP_VERSION : {process.env.REACT_APP_VERSION}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Configuration;
