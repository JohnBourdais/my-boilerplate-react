import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./containers/Layout";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV !== "production") {
  console.log(process.env.REACT_APP_WEBSITE_NAME);
  console.log(process.env.REACT_APP_VERSION);
  console.log(process.env.REACT_APP_HOST_ENV);
}

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
