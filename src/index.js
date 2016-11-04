// import 'babel-core/polyfill'
require('normalize.css/normalize.css');
require('styles/App.css');

import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';

import store from './stores'
import { Provider } from 'react-redux'


// import App from './pages/App';
// import Battle from './pages/Battle';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));  //for react only

/*ReactDOM.render(											  //for redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)*/

ReactDOM.render((<Provider store={store}>
    <Router routes={routes} history={browserHistory}></Router>
  </Provider>),
    document.getElementById('app')
);

