//数据源
var age = 20;
//修改返回的数据
export function data(state = age, action) {
    switch (action.type) {
        case "ADD":
            return state + action.data;
            break;
        case "DEL":
            return state - action.data;
            break;
        default:
            return state
            break;
    }
}