import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './pages/App'
import Battle from './pages/Battle'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={App}/>
    <Route path="/battle" component={Battle}/>
  </Route>
)
