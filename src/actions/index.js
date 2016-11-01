import * as types from '../constants/ActionTypes'

import fetch from 'isomorphic-fetch'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })


const requestTodos = () => ({type: types.REQUEST_TODOS})
const receiveTodos = (todos) => ({type: types.RECEIVE_TODOS, todos})


const fetchTodo = () => dispatch => {
	//通知 reducer 请求开始的 action
	dispatch(requestTodos())
	return fetch('/data/todo.json')
	  .then(response => { return response.json()})
	  //通知 reducer 请求成功结束的 action
	  .then(json => {
	  	dispatch(receiveTodos(json))
	  	json.map(todo => dispatch(addTodo(todo.text)))
	  })
	  //通知 reducer 请求失败的 action
}

export const fetchTodos = () => (dispatch) => dispatch(fetchTodo())

export const CallForFight = () => ({ type: types.CALL_FOR_FIGHT })


/**
Middleware action 被发起之后，到达 reducer 之前的扩展点
ctrl +> action(reducer)

	 					--reducers(pure fn)--
	 					 --- Middleware---
								 ||
								Logger
								Async
╔═════════╗       ╔════════════╗         ╔════════╗         ╔═════════════════╗
║ Actions ║────>──║ Dispatchet ║ ───────>║ Stores ║────────>║ View Components ║
╚═════════╝       ╚════════════╝         ╚════════╝         ╚═════════════════╝
                      ^                                             │
                      │                 ╔═════════╗                 │
                       ──────────────── ║ Actions ║ ───────────────
                                        ╚═════════╝

**/