import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import 'semantic-ui-css/semantic.min.css'
import { CustomerHome } from './components/Customer/CustomerHome';
import { ProductHome } from './components/Product/ProductHome';
import { StoreHome } from './components/Store/StoreHome';
import { SaleHome } from './components/Sales/SaleHome';
import { Footer } from './components/Footer';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout key="lay">
        <Route exact path='/' component={Home} />
        <Route path='/Customer' component={CustomerHome} />      
        <Route path='/Product'  component={ProductHome} />
        <Route path='/Store' component={StoreHome} />
        <Route path='/Sales' component={SaleHome} />
        <Route path='/Footer' component={Footer} />
      </Layout>
    );
  }
}
