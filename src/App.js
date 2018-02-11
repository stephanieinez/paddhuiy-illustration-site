import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import contentfulClient from './registerContentful';

import { ROOT, ABOUT, CONTACT, ILLUSTRATIONS, BLOG } from './routes';
import { Header, Footer, LoadingWrapper } from './components';

import './App.css';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Illustrations from './containers/Illustrations';
import Blog from './containers/Blog';

/**
TODO: N02
Render each page with their props.
* */

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true, // We need this because our app will be initially loading the data from contentful
      error: '',
    };
  }
  componentDidMount() {
    /**
     Here we are doing a request in the form of a promise.
     This allows us to run the code asynchronously.
    * */
    contentfulClient
      .getEntries() // returns a promise.
      .then((entries) => {
        // run this func once the promise is resolved
        const apiResult = {};
        entries.items.forEach((entry) => {
          if (entry) {
            // entry.sys.contentType.sys.id = home, about etc
            // entry.fields = the content of the field, so content of home, about etc
            apiResult[entry.sys.contentType.sys.id] = entry.fields;
          }
        });
        // set loading to false, since we know the request is finished
        // populate state with apiResult using spread operator TODO Study spread operator
        this.setState({ loading: false, ...apiResult });
      })
      .catch((error) => {
        // If the promise above fails run this function.
        console.error(error);
        this.setState({ error });
      });
  }
  render() {
    const { loading } = this.state;
    console.log('app', this.state);
    return (
      <div>
        <BrowserRouter>
          <div className="page-container">
            <Header />
            <Switch>
              <Route
                exactpath={ROOT}
                component={() => (
                  <LoadingWrapper
                    loading={loading}
                    renderContent={() => (
                      <Home
                        homeImage={this.state.home.homeImage.fields.file.url} // get the props from the API and pass down to component
                      />
                    )}
                  />
                )}
              />
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
  }
}

export default App;
