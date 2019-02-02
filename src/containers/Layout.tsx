import React, { Component } from 'react';

import AppRouter from './AppRouter/AppRouter';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="content">
          <Menu />
          <AppRouter />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
