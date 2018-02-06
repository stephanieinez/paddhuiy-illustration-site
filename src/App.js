import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROOT, ABOUT, CONTACT, ILLUSTRATIONS, BLOG } from './routes';
import { Header, Footer } from './components';

import './App.css';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Illustrations from './containers/Illustrations';
import Blog from './containers/Blog';

const App = () => (
  <div>
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <Switch>
          <Route exact path={ROOT} component={Home} />
          <Route path={ABOUT} component={About} />
          <Route path={CONTACT} component={Contact} />
          <Route path={ILLUSTRATIONS} component={Illustrations} />
          <Route path={BLOG} component={Blog} />
          {/* <Route component={NotFound} />{' '} */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
