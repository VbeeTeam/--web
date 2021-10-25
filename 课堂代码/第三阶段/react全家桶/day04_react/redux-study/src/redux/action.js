/**
 * 通过action对象修改store的方法
 */
// export function addCount(data){
//     return {
//         type: 'add',
//         data
//     }
// }
// export function reduceCount(data){
//     return {
//         type: 'reduce',
//         data
//     }
// }
import store from "./store"
// 同步action返回的值都是{}
export const addCount = (data) => ({type: 'add', data})
export const reduceCount = (data) => ({type: 'reduce',data})
// 异步action返回的值都是function函数
export const addCountSync = (data, time) => {
    console.log(data, time)
    return () => {
        setTimeout(()=>{
            store.dispatch(addCount(data))
        },time)
    }
}

export const changeNum = (data) => ({type: 'change', data})


