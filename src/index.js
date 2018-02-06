import React from 'react';
import { render } from 'react-dom';
// import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import contentfulClient from './registerContentful';
const target = document.querySelector('#root');
contentfulClient
  .getEntries()
  .then(entries => {
    entries.items.forEach(function(entry) {
      if (entry) {
        console.log(entry);
      }
    });
  })
  .catch(error => {
    console.log(error);
  });
render(
  // <ConnectedRouter>
  <App />,
  // </ConnectedRouter>,
  target
);
registerServiceWorker();
