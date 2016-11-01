import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from '../reducers'

//window.STATE_FROM_SERVER接收服务端初始状态
// export default createStore(reducer, window.STATE_FROM_SERVER) //不使用中间件的情况

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
export default createStore(
  reducer,
  applyMiddleware(...middleware)
)