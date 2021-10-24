import React, { Component } from "react";

export default class News extends Component {
  state = {
    list: ["新闻列表1", "新闻列表2", "新闻列表3", "新闻列表4", "新闻列表5"],
  };
  render() {
    return (
      <ul>
        {
            this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
            ))
        }
      </ul>
    );
  }
}
