import React, { Component } from 'react';

import{store} from "../redux/store";
import * as action from "../redux/action"

class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: store.getState()
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                num: store.getState()
            })
        })
    }
    
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
          };
    }

    render() {
        return (
            <div>
                我是About组件页面
                数据：{this.state.num}
                <button onClick={()=> {store.dispatch(action.add(1))}}>点我加1</button>
                <button onClick={()=> {store.dispatch(action.del(1))}}>点我减1</button>
            </div>
        );
    }
}

export default About;