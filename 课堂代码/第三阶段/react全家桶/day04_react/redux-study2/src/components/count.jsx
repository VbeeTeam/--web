import React, { Component } from "react";
import { connect } from "react-redux";

class Count extends Component {
  addCount = () => {
      console.log(this.props)
      //发送action
      this.props.send(1)
  };
 
  render() {
    return (
      <>
        <div>{this.props.state}</div>
        <button onClick={this.addCount}>+</button>
      </>
    );
  }
}
// 1.发送方修改数据
const mapDispatchToProps = (dispath) => {
  return {
    send: (num) => {
      dispath({
        type: "add",
        data: num
      });
    },
  };
};
// 2.发送方，也是接收方
const mapStateToProps = (state) => {
    console.log(state)
    return {
        state
    }
}

// 发送方，实现第二个参数
export default connect(mapStateToProps, mapDispatchToProps)(Count);
