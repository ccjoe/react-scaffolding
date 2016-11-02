import { combineReducers } from 'redux'
import todos from './todos-local'
import remoteTodos from './todos-remote'

const rootReducer = combineReducers({
  todos,
  remoteTodos
})

export default rootReducer
