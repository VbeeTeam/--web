import React, { Component } from "react";

export default class Detail extends Component {
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
  render() {
    //   接收父组件传递的路由参数
    //  params接收
    // console.log(this.props.match.params);
    // const id = this.props.match.params.id;
    //  query接收
    // console.log(this.props.location.query);
    // const id = this.props.location.query.id.toString();
    //  state接收
    console.log(this.props.location.state);
    const id = this.props.location.state.id.toString();
    console.log("id:",id)
    // 过滤
    const arr = this.state.list.filter((item) => id.includes(item.id));
    console.log(arr[0])
    return (
      <>
        <h3>详情页</h3>
        <p>{id}--{arr[0].title}</p>
      </>
    );
  }
}
