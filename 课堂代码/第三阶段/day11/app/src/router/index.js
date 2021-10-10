import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      title: "首页"
    },
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    meta:{
      title: "分类"
    },
    component: () => import('../views/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{
      title: "购物车"
    },
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/my',
    name: 'My',
    meta:{
      title: "我的"
    },
    component: () => import('../views/My.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta:{
      title: "商品详情"
    },
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      title: "登录"
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: "/order",
    name: "Order",
    meta:{
      title: "订单"
    },
    component: () => import('../views/Order.vue')
  },
  {
    path: "/about",
    name: "About",
    meta:{
      title: "关于"
    },
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

//路由守卫
router.beforeEach(function (to, from, next) {
  var userInfo = window.localStorage.getItem("userInfo");
  if (userInfo) {
    next()
  } else {
    //防止死循环
    if (to.path == '/login') {
      next();
      return
    }
    next({
      path: "/login"
    })
  }
})

export default router
