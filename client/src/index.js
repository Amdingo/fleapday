import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import App from './App.js';

const store = configureStore();

// registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
