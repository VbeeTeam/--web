import React, { Component } from 'react';

import Son from "./Son"
import Son2 from "./Son2"

class Father extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg: "我是父组件的数据"
        }
        
    }

    dataFun(value) {
        console.log(value)
    }

    render() {
        return (
            <div>
                <Son text={this.state.msg} fun={this.dataFun}/>
                <Son2 />
            </div>
        );
    }
}

export default Father;