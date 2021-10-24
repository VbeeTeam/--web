import React,{Component} from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component{
    render(){
        // ...扩展运算 接收所有父组件传递过来的属性
        return(
            <NavLink activeClassName='active' {...this.props}/>
        )
    }
}
