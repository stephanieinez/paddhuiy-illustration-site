import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';

import { ROOT, ABOUT, CONTACT, ILLUSTRATIONS, BLOG } from './routes';
import {
  Header,
  Footer,
  LoadingWrapper,
  NotFound,
  ErrorBoundaryPage,
  ErrorBoundaryPageRender,
} from './components';

import './App.css';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Illustrations from './containers/Illustrations';
import Blog from './containers/Blog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: '',
    };
  }
  componentDidMount() {
    fetch('/api/content')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error getting content');
        }
        return response.json();
      })
      .then((apiResult) => {
        this.setState({ loading: false, ...apiResult });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }
  render() {
    const { loading, error } = this.state;
    if (error) {
      return <ErrorBoundaryPageRender />;
    }
    return (
      <div>
        <BrowserRouter>
          <div className="page-container">
            <ErrorBoundaryPage>
              <Header />
              <Switch>
                <Route
                  exact
                  path={ROOT}
                  render={reactRouterProps => (
                    <LoadingWrapper
                      loading={loading}
                      renderContent={() => (
                        <Home
                          {...reactRouterProps}
                          homeImage={this.state.home.homeImage.fields.file.url} // get the props from the API and pass down to component
                        />
                      )}
                    />
                  )}
                />
                <Route
                  path={ABOUT}
                  render={reactRouterProps => (
                    <LoadingWrapper
                      loading={loading}
                      renderContent={() => (
                        <About
                          {...reactRouterProps}
                          aboutContent={this.state.about.aboutContent}
                          aboutImage={
                            this.state.about.aboutImage.fields.file.url
                          }
                        />
                      )}
                    />
                  )}
                />
                <Route
                  path={CONTACT}
                  render={reactRouterProps => (
                    <LoadingWrapper
                      loading={loading}
                      renderContent={() => (
                        <Contact
                          {...reactRouterProps}
                          contactContent={this.state.contact.contactContent}
                          contactImage={
                            this.state.contact.contactImage.fields.file.url
                          }
                        />
                      )}
                    />
                  )}
                />
                <Route
                  path={ILLUSTRATIONS}
                  render={reactRouterProps => (
                    <LoadingWrapper
                      loading={loading}
                      renderContent={() => (
                        <Illustrations
                          {...reactRouterProps}
                          galleryImages={this.state.gallery.images}
                        />
                      )}
                    />
                  )}
                />
                <Route
                  path={BLOG}
                  render={reactRouterProps => (
                    <LoadingWrapper
                      loading={loading}
                      renderContent={() => (
                        <Blog
                          {...reactRouterProps}
                          blogContent={this.state.blog.blogContent}
                          blogImage={this.state.blog.blogImage.fields.file.url}
                        />
                      )}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </ErrorBoundaryPage>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
