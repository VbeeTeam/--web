// import "./css/index.scss";
// import "./css/test.less";
// import "./css/common.css";
// import "./css/iconfont.css";

// import vueImg from "./img/vue.jpg";
// document.getElementById("imgId").src = vueImg;

// npm i webpack webpack-cli html-webpack-plugin webpack-dev-server@3 
// style-loader css-loader less less-loader sass sass-loader
// url-loader file-loader html-loader 
// 配置命令 打包 server

// npm i vue
import Vue from "vue";
// import Vue from "../node_modules/vue/dist/vue"; 太low了

// 导入组件
import App from "./App.vue";
// webpack无法打包.vue文件
// npm i vue-loader vue-template-compiler -D

new Vue({
    el: "#app",
    data: {
        msg: "测试"
    },
    // components: {
    //     // mycom: {
    //     //     template: "#tplId"
    //     // }
    //     login
    // }
    render: h => h(App)
})
