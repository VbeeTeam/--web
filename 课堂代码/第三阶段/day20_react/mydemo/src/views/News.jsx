import React, { Component } from 'react';
import {Route} from "react-router-dom"

import MyNavLink from "../components/MyNavLink"
import Detail from "./Detail"

class News extends Component {

    state = {
        newsList: [
            {
                id: 1,
                title: "新闻1"
            },
            {
                id: 2,
                title: "新闻2"
            },
            {
                id: 3,
                title: "新闻3"
            }
        ]
    }

    toDetail = (id) => {
        this.props.history.push(`/home/news/detail/${id}`);
    }
    go = () => {
        this.props.history.goForward();
    }
    back = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.newsList.map((value) => 
                        <li key={value.id}>
                            {/* 路由传参 */}
                            {/* <MyNavLink to={`/home/news/detail/${value.id}`}>{value.title}</MyNavLink>&nbsp;&nbsp;&nbsp; */}
                            
                            <MyNavLink to={{pathname:"/home/news/detail",query: {id:value.id}}}>{value.title}</MyNavLink>&nbsp;&nbsp;&nbsp;
                            
                            <button onClick={() => this.toDetail(value.id)}>查看</button>

                        </li>)
                    }
                </ul>
                
                <div><button onClick={this.back}>回退</button>&nbsp;&nbsp;&nbsp;<button onClick={this.go}>前进</button></div>

                {/* <Route path="/home/news/detail/:id" component={Detail} /> */}
                <Route path="/home/news/detail" component={Detail} />
            </div>
        );
    }
}

export default News;