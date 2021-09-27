// ES6导入css
import "./css/style.css";
import "./css/index.less";
import "./css/common.scss";
// npm i webpack webpack-cli html-webpack-plugin url-loader file-loader html-loader -D

console.log("111222333444");

import "./js/utils";

if(module.hot){ //如果模块有热更新
    module.hot.accept(['./js/utils']) //只更新utils模块
}