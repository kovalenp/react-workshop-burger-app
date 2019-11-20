import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Checkout from './components/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <BurgerBuilder />
        <Checkout />
      </div>
    );
  }
}

export default App;
