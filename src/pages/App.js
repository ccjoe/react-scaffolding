require('normalize.css/normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

import { browserHistory,Link } from 'react-router'

const navTo = function (e) {
    e.preventDefault()
    const path = '/battle'
    browserHistory.push(path)
}
const Nav = <div className="">
              <h2>React Router Tutorial</h2>
              <ul className="todo-list" role="nav">
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/battle" activeClassName="active"  onClick={navTo}>Battle</Link></li>
              </ul>
            </div>

const App = ({todos, remote, actions}) =>  (
  <div>
    <div>
      <Header addTodo={actions.addTodo} onFetch={actions.fetchTodos}/>
      <MainSection todos={todos} remote={remote} actions={actions} />
    </div>
     {Nav}
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  remote: state.remoteTodos.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
