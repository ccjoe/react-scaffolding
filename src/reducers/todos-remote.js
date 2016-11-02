import { REQUEST_TODOS, RECEIVE_TODOS} from '../constants/ActionTypes'

export default function todos(state = [], action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.todos
      })
    default:
      return state
  }
}
