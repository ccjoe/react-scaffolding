// import 'babel-core/polyfill'
import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';

import store from './stores'
import { Provider } from 'react-redux'


import App from './pages/App';
import Battle from './pages/Battle';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));  //for react only

/*ReactDOM.render(											  //for redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
   routes={routes}
)*/

ReactDOM.render((<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/battle" component={Battle}/>
    </Router>
  </Provider>),
    document.getElementById('app')
);

