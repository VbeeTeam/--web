//ES6引入React包，解构赋值引入Component组件
import React, { Component, Fragment } from 'react';

// 导入
// import my,{myName,str} from "../assets/js/out";
// console.log(myName,str);
// console.log(my())


// Fragment 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。
// 引入图片
// import Img from "../assets/img/01.jpg"

class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* <> */}
                <div>
                    你好我是组件{parseInt(Math.random() * 10)}
                </div>
                <div>
                    你好我是组件{parseInt(Math.random() * 10)}
                </div>
                {/* <img src="../assets/img/01.jpg" alt=""/> */}
                {/* <img src={Img} alt=""/> */}
                <img src={require('../assets/img/01.jpg').default} alt=""/>

                {/* </> */}
            </Fragment>

        );
    }
}

export default Home;