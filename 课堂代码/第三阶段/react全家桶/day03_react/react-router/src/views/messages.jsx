import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./detail";

export default class Message extends Component {
  state = {
    list: [
      {
        id: 1,
        title: "消息列表1",
      },
      {
        id: 2,
        title: "消息列表2",
      },
      {
        id: 3,
        title: "消息列表3",
      },
      {
        id: 4,
        title: "消息列表4",
      },
      {
        id: 5,
        title: "消息列表5",
      },
    ],
  };
  toDetail(id) {
    //   params传参
    // this.props.history.push(`/home/messages/detail/${id}`);
    // query传参
    // this.props.history.push({pathname: '/home/messages/detail', query:{id: id}});
    // state传参
    this.props.history.push({pathname: '/home/messages/detail', state:{id: id}});
  }
  toDetail2(id) {
    //   替换不会保留历史
    this.props.history.replace(`/home/messages/detail/${id}`);
  }
  back = () => {
    this.props.history.goBack();
  }
  forWard = () => {
      this.props.history.goForward()
  }
  
    render() {
    return (
      <ol>
        {this.state.list.map((item) => (
          <li key={item.id}>
            {/* <Link to={`/home/messages/detail/${item.id}`}>
              {item.title}
            </Link> */}
            {/* <Link to={{pathname: "/home/messages/detail", query: {id: item.id}}}>
              {item.title}
            </Link> */}
            <Link to={{pathname: "/home/messages/detail", state: {id: item.id}}}>
              {item.title}
            </Link>
            <button onClick={() => this.toDetail(item.id)}>push查看详情</button>
            <button onClick={() => this.toDetail2(item.id)}>replace查看详情</button>
          </li>
        ))}
        <button onClick={this.back}>回退</button>
        <button onClick={this.forWard}>前进</button>
        {/* <Route path="/home/messages/detail/:id" component={Detail} /> */}
        <Route path="/home/messages/detail" component={Detail} />
      </ol>
    );
  }
}
