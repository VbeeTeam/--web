# 0. redux要点
	1. redux理解
	2. redux相关API
	3. redux核心概念(3个)

#1. redux理解
	什么?: redux是专门做状态管理的独立第3方库, 不是react插件
	作用?: 对应用中状态进行集中式的管理(写/读)
	开发: 与react-redux, redux-thunk等插件配合使用

​	共享单车（组件状态管理机制---每个组件都可以拿到这个数据状态）

需求场景：

多个组件的状态需要共享的时候

一个组件改变另一个组件状态的时候

组件中的状态需要展示的时候，在任何地方都可以拿到

三大原则：

1. 单一的数据源  整个react中的数据状态都会被统一管理到store
2. state是只读的，我们不能直接修改state状态，可以通过redux中特定的方法进行修改
3. 使用纯函数方法进行修改：action方法来改变redux中的state

下载：npm i --save redux

# 2. redux相关API
	redux中包含: createStore(), applyMiddleware(), combineReducers()
	store对象: getState(), dispatch(), subscribe()
	react-redux: <Provider>, connect()()

# 3. redux核心概念(3个)
	action: 
		默认是对象(同步action), {type: 'xxx', data: value}, 需要通过对应的actionCreator产生, 
		它的值也可以是函数(异步action)
	reducer
		根据老的state和指定的action, 返回一个新的state
		不能修改老的state
	store
		redux最核心的管理对象
		内部管理着: state和reducer
		提供方法: getState(), dispatch(action), subscribe(listener)

