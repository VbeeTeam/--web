/**
 * 初始化、加工状态
 * 1.用于创建组件服务的reducer，reducer本质就是一个函数
 * 2.reducer函数会接收到两个参数 之前的状态：preState 动作对象action
 */
export default function countReducer(state = 0, action) {
    // 从action对象中获取：type、data
    const {type, data} = action
    // 根据type决定如何加工数据
    console.log(action)
    switch(type) {
        case 'add':
            return state + data
        default:
            return state
    }
}
