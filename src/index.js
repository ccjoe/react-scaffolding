// import 'babel-core/polyfill'
import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import rootRoute from './routes';

import store from './stores'
import { Provider } from 'react-redux'


// import App from './components/Main';


// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));  //for react only

ReactDOM.render((<Provider store={store}>
    {rootRoute}
  </Provider>),
    document.getElementById('app')
);

