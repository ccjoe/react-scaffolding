// import 'babel-core/polyfill'
import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import rootRoute from './pages/routes';

import store from './stores'
import { Provider } from 'react-redux'


// import App from './components/Main';
import App from './pages/App';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));  //for react only
	
ReactDOM.render(											  //for redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

/*ReactDOM.render(											   //for react-router and history
  <Router history={browserHistory} routes={rootRoute}/>,
  document.getElementById('root')
);*/

