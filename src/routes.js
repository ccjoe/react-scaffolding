var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./pages/App');
var Battle = require('./pages/Battle');

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/battle" component={Battle}/>
    </Router>
)
