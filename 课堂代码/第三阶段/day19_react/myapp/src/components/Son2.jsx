import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

class Son2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "兄弟二的数据",
            list: []
        }
    }

    toSibling() {
        PubSub.publish("evt", this.state.text)
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list')
            .then(function (response) {
                console.log(response);
                this.setState({
                    list: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                兄弟2
                <button onClick={this.toSibling.bind(this)}>同级传值</button>
            </div>
        );
    }
}

//npm install --save pubsub-js  利用JavaScript进行发布/订阅的库  兄弟组件传值  

export default Son2;