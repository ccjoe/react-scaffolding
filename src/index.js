// import 'babel-core/polyfill'
import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';


import store from './stores'
import { Provider } from 'react-redux'


// import App from './components/Main';
import App from './pages/App';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)



