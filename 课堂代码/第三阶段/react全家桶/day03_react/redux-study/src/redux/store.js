/**
 * 暴露store对象，整个应用只有一个store对象
 */

// 专门用于redux创建store对象的方法
import {applyMiddleware, createStore} from 'redux'
// 引入为组件服务的reducer
import countReducer from './reducer'
// 暴露store
// const store = createStore(countReducer)
// export default createStore(countReducer)
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
export default createStore(countReducer, applyMiddleware(thunk))