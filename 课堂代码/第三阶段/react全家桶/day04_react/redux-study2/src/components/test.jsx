import React,{Component} from 'react'

import { connect } from 'react-redux'

class Test extends Component {
   
    render(){
        console.log(this.props)
        return (
            <>
            <h1>测试组件当前值为---{this.props.state}</h1>
            </>
        )
    }
}
// 2.接收
const mapStateToProps = (state) => {
    console.log(state)
    return {
        state
    }
}
//接收方实现第一个参数
export default connect(mapStateToProps)(Test)