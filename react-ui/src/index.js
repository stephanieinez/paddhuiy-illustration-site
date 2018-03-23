import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Lets get the html div we want to render our react code to
// target is now the div with the id of root.
const target = document.querySelector('#root');

render(<App />, target);
// PWA Stuff not important for now
registerServiceWorker();
