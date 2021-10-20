import React, { Component, Fragment } from 'react';

import {Route, Switch, Redirect} from "react-router-dom"

import {store} from "../redux/store"

import News from "./News"
import Messages from "./Messages"
import MyNavLink from "../components/MyNavLink"

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "我是父组件的数据",
            num: store.getState()
        }

    }

    render() {
        return (
            <Fragment>
                <h3>你好我是Home组件页面</h3>
                {this.state.num}
                <nav>
                    <MyNavLink to="/home/news">News</MyNavLink> | &nbsp;
                    <MyNavLink to="/home/messages">Messages</MyNavLink>
                </nav>
                <section>
                    {/* 只显示其中一个 */}
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/messages" component={Messages} />
                        <Redirect to="/home/news" />
                    </Switch>
                </section>

            </Fragment>
        );
    }
}

export default Home;