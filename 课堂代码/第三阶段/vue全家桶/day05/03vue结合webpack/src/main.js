/**
 * 项目入口文件
 */

// import Vue from "../node_modules/vue/dist/vue"; 可以用这种路径，但是low

// 可以直接这么写，但是我们需要在webpack配置路径解析
import Vue from "vue";
// 导入App组件
import App from "./App.vue";


// 无法识别.vue的文件，name我们就需要使用一个loader来将它转换 
// npm i vue-loader vue-template-compiler -D

new Vue({
    el: "#app",
    data: {
        msg: "vue测试"
    },
    // components: { //渲染的组件不会替换el绑定的视图
    //     // login: {
    //     //     template: "<h1>登录组件</h1>"
    //     // },
    //     // tplLi: {
    //     //     template: "#tplId"
    //     // },
    //     App
    // }
    // render渲染模板
    // render(createElements){ 
    // //createElements是一个参数方法，调用它可以把指定的组件模板渲染成html结构
    //    return createElements(App);
    // //return的结果会替换el绑定的视图
    // }
    // 箭头函数
    render: t => t (App)
})