import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
    , document.getElementById('root')
);
serviceWorker.unregister();
