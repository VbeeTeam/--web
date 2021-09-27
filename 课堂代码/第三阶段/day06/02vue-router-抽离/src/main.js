/**
 * 项目入口文件
 */
// 可以直接这么写，但是我们需要在webpack配置路径解析
import Vue from "vue";
// 导入App组件
import App from "./App.vue";
// 无法识别.vue的文件，name我们就需要使用一个loader来将它转换 
// npm i vue-loader vue-template-compiler -D
// 1、导入vue-router的包
import VueRouter from 'vue-router';
///2、手动挂载vue路由到vue
Vue.use(VueRouter)
// 1.导入路由模块
import router from "./router.js";
new Vue({
    el: "#app",
    // 箭头函数
    render: t => t (App),
    // 4.将路由对象挂载到vue实例上
    router
})