import React, { Component } from 'react';
import PubSub from "pubsub-js";

class Son extends Component {
    constructor(props){
        super(props)
        this.state = {
            sonText: "我是子组件数据"
        }

        PubSub.subscribe("evt", (msg, data) => {
            console.log("son2",msg, data)
        })
    }


    render() {
        return (
            <div>
                <span>{this.props.text}</span>
                <button onClick={this.props.fun.bind(this, this.state.sonText)}>传递给父组件</button>
            </div>
        );
    }
}

export default Son;