import React,{Component} from 'react'

import store from '../redux/store';
export default class Test extends Component {
   
    render(){
        return (
            <>
            <h1>测试组件当前值为：{store.getState()}</h1>
            </>
        )
    }
}