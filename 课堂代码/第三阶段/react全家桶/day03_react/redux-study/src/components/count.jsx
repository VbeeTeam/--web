import React,{Component} from 'react'

import store from '../redux/store';
import { addCount, reduceCount, addCountSync } from '../redux/action';

export default class Count extends Component {
    // state = {
    //     count: 0
    // }
    // componentDidMount(){
    //     // 检测redux的变化，只要发送改变就调用render渲染
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }
    add = () =>{
        // var {count} = this.state;
        const {value} = this.selectNum;
        // this.setState({
        //     count: count + value * 1
        // })
        // 通知redux加count
        console.log(addCount(value * 1))
        store.dispatch(addCount(value * 1))
    }
    reduce = () =>{
        // var {count} = this.state;
        const {value} = this.selectNum;
        // this.setState({
        //     count: count - value * 1
        // })
        store.dispatch(reduceCount(value * 1))
    }
    addSync = () =>{
        const {value} = this.selectNum;
        store.dispatch(addCountSync(value * 1, 1000))
    }
    render(){
        return (
            <>
                {/* <h1>当前值为：{this.state.count}</h1> */}
                <h1>当前值为：{store.getState()}</h1>
                <select ref={s => this.selectNum = s}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.add}>+</button>&nbsp;&nbsp;
                <button onClick={this.reduce}>-</button>
                <button onClick={this.addSync}>异步+</button>&nbsp;&nbsp;
            </>
        )
    }
}