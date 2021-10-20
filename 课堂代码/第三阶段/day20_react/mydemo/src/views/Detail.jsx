import React, { Component } from 'react';

class Detail extends Component {

    state = {
        allNews: [
            {
                id: 1,
                content: "我是新闻详情1"
            },
            {
                id: 2,
                content: "我是新闻详情2"
            },
            {
                id: 3,
                content: "我是新闻详情3"
            }
        ]
    }

    render() {
        //接收传过来的id
        const id = this.props.match.params.id
        // const id = this.props.location.query.id

        //查询对应的详情
        var content = {};
        this.state.allNews.forEach((item) => {
            if(item.id == id){
               content = item
            }
        })

        return (
            <div>
                <ul>
                    <li>ID: {content.id}</li>
                    <li>内容：{content.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;