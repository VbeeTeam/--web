/**
 * 暴露store对象，整个应用只有一个store对象
 */

// 专门用于redux创建store对象的方法
import {createStore} from 'redux'
// 引入为组件服务的reducer
import countReducer from './countReducer'
// 暴露store
export default createStore(countReducer)


