/**
 * 路由模块
*/
// 1、导入vue-router的包
import VueRouter from 'vue-router';
// 导入路由页面组件
import Home from "./views/Home.vue";
import About from "./views/About.vue";
///3、创建路由对象
var router = new VueRouter({
    routes:[
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ],
    linkActiveClass: "active"
})
// 把路由对象暴露出去
export default router;