import React, { Component } from 'react';
import './H1.css'; // Tell Webpack that Button.js uses these styles

class H1 extends Component {
     
    render() {
      return (
        <h1 classNam >Hello, {this.props.name}</h1>
      )
    }

  }

export default H1;