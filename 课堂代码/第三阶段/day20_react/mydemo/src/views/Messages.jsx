import React, { Component } from 'react';

class Messages extends Component {

    state = {
        messList:[
            {
                id: 1,
                title: "消息1"
            },
            {
                id: 2,
                title: "消息2"
            },
            {
                id: 3,
                title: "消息3"
            }
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messList.map((value) => <li key={value.id}>{value.title}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Messages;