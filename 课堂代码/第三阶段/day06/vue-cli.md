# vue-cli

# Vue-cli的使用

https://cn.vuejs.org/

## 一、vue脚手架搭建

### 1.进入一个目录，创建项目

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021102736785-1315405340.png) 

 对应命令：

```
vue create project-one
```

 

### 2.我们这里选择手动配置

按 ↓ 选择“Manually select features”，再按 Enter

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021102957513-2040940116.png)

###  3.选择你需要的配置项

通过↑ ↓ 箭头选择你要配置的项，按 空格 是选中，按 a 是全选，按 i 是反选。具体每个配置项表示什么意思在下面会有说明。

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021103233437-1501286876.png)

 ![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021103350666-1166239485.png)

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021103415871-479364645.png)

 ![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021103454187-1848452999.png)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) Babel //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 
( ) TypeScript// TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行
( ) Progressive Web App (PWA) Support// 渐进式Web应用程序
( ) Router // vue-router（vue路由）
( ) Vuex // vuex（vue的状态管理模式）
( ) CSS Pre-processors // CSS 预处理器（如：less、sass）
( ) Linter / Formatter // 代码风格检查和格式化（如：ESlint）
( ) Unit Testing // 单元测试（unit tests）
( ) E2E Testing // e2e（end to end） 测试
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021103848447-729650033.png) 

选完之后按 Enter。分别选择每个对应功能的具体包。选你擅长的，没有擅长的，就选使用广的，哈哈，方便咨询别人。

 

### 3.1 选择是否使用history router

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021104027893-2061265382.png) 

 Vue-Router 利用了浏览器自身的hash 模式和 history 模式的特性来实现前端路由（通过调用浏览器提供的接口）。

- 我这里建议选n。这样打包出来丢到服务器上可以直接使用了，后期要用的话，也可以自己再开起来。

- 选yes的话需要服务器那边再进行设置。

  Use history mode for router? (Requires proper server setup for index fallback in production)

###  

### 3.2 选择css 预处理器

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021104224802-1620339249.png)

我选择的是Sass/Scss(with dart-sass) 

node-sass是自动编译实时的，dart-sass需要保存后才会生效。sass 官方目前主力推dart-sass 最新的特性都会在这个上面先实现。（该回答参考http://www.imooc.com/qadetail/318730）

###  

### 3.3 选择Eslint代码验证规则

提供一个插件化的javascript代码检测工具，ESLint + Prettier //使用较多

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021105036824-77055161.png)

###  

### 3.4 选择什么时候进行代码规则检测

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021105135465-1565234524.png)

```
( ) Lint on save // 保存就检测
( ) Lint and fix on commit // fix和commit时候检查
```

建议选择保存就检测，等到commit的时候，问题可能都已经积累很多了。

###  

### 3.5 选择单元测试

 ![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021105318156-1779090914.png)

```
> Mocha + Chai //mocha灵活,只提供简单的测试结构，如果需要其他功能需要添加其他库/插件完成。必须在全局环境中安装
Jest //安装配置简单，容易上手。内置Istanbul，可以查看到测试覆盖率，相较于Mocha:配置简洁、测试代码简洁、易于和babel集成、内置丰富的expect
```

###  

### 3.6 选择如何存放配置

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021105512142-838448219.png)

```
> In dedicated config files // 独立文件放置
  In package.json // 放package.json里
```

如果是选择 独立文件放置，项目会有单独如下图所示的几件文件。

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021110637371-1323014892.png) 

### 3.7 是否保存当前配置

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021105656590-1468639515.png)

键入N不记录，如果键入Y需要输入保存名字，如第2步所看到的我保存的名字为test。

 

### 4.等待创建项目

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021110126336-318081539.png) 

### 5.执行它给出的命令，可以直接访问了

![img](https://img2018.cnblogs.com/blog/735803/201910/735803-20191021110228160-558753918.png)

## 二、项目目录介绍

1. node_modules 存放第三方依赖
2. public 存放静态文件夹
2.1 favicon.ico  是网站图标 

2.2 index.html  页面入口文件

3. src 存放源码文件夹
    3.1 assets 存放图片，css

  3.2 components 存放组件

  3.3 views 存放视图组件

  3.4 router 存放路由配置

  3.5 store 存放 vuex 配置

  3.6 plugins 存放插件配置

  3.7 App.vue  根组件 

  3.8 main.js  入口js 

4.browserslistrc 配置使用CSS兼容性插件的使用范围
5. .eslintrc.js ESlint配置
6. .gitignore 指定文件无需提交到git上
7. balel.config.js 使用一些预设
8. package.json 项目描述及依赖
9. package-lock.json 版本管理使用的文件
10. .editorco 配置文件,规范编辑器的配置
11. 11 vue.config.js webpack配置文件

## 三、vue路由基础复习

1.路由跳转的第一种方式及传参

```js
<router-link to="/">Home</router-link> |
<router-link to="/about?id=1">About</router-link> | 
<router-link to="/my/:id">My</router-link>
```

2.路由跳转的第二种方式及传参

```js
//第一种路由跳转方式  及 传参
this.$router.push({path: "/detail", query:{id: 1}})
    
```

3.路由跳转的第三种方式及传参

```js
//第二种路由跳转方式
this.$router.push({name: "Detail", params:{id: this.id}})

```

4.路由配置

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "首页"
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "关于"
    },
    component: About
  },
  {
    path: "/my",
    name: "My",
    meta: {
      title: "我的"
    },
    component: () => import('../views/My.vue')
  },
  {
    path: "/detail",
    name: "Detail",
    meta: {
      title: "详情"
    },
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

```



## 四、vue组件基础复习

1.父组件给子组件传参

```js
//父组件 通过绑定v-bind:属性
<template>
<div class="about">
    <Child :msg2="msg" /> 
</div>
</template>
<script>
import Child from "@/components/Child.vue"
export default {
  // 定义属性
  name:'About',
  components: {
    Child
  },
  data() {
    return {
      msg: "我是父组件的数据"
    }
  }
}
</script>
//子组件使用props接收
<template>
  <div class="child">
      {{ msg2 }}
  </div>
</template>
<script>
export default {
  // 定义属性
  name:'Child',
//   props: {
//       msg: String
//   },
  props: ["msg2"],
  data() {
    return {
      childData: "子组件的数据"
    }
  }
}
</script>
```



2.子组件给父组件传参

```js
//子组件 子组件给父组件传参 通过$emit映射一个自定义方法
<template>
  <div class="child">
      <button @click="toFatherData" >给父组件传递参数</button>
  </div>
</template>
<script>
export default {
  // 定义属性
  name:'Child',
  data() {
    return {
      childData: "子组件的数据"
    }
  },
  methods: {
    //子组件给父组件传参 通过$emit映射一个自定义方法
    toFatherData(){
        this.$emit("fun", this.childData)
    }
  }
}
</script>
//父组件 通过v-on绑定子组件的映射方法接收
<template>
  <div class="about">
    <Child @fun="childMethod" />
  </div>
</template>
<script>
import Child from "@/components/Child.vue"

export default {
  // 定义属性
  name:'About',
  components: {
    Child
  },
  data() {
    return {
    }
  },
  //所有函数方法
  methods: {
    //子组件映射的接收方法
    childMethod(value) {
      console.log(value)
    }
  }
}
</script>
```

# 导航守卫

译者注

“导航”表示路由正在发生改变。

正如其名，`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

记住**参数或查询的改变并不会触发进入/离开的导航守卫**。https://vueschool.io/lessons/how-to-configure-an-authentication-middleware-route-guard-with-vue-router?friend=vuerouter)

## [#](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫)全局前置守卫

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

**确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错**。这里有一个在用户未能验证身份时重定向到 `/login` 的示例：

```js
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next()
})
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```



## [#](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局后置钩子)全局后置钩子

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
})
```

## [#](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#路由独享的守卫)路由独享的守卫

你可以在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

这些守卫与全局前置守卫的方法参数是一样的。

## [#](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#组件内的守卫)组件内的守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

`beforeRouteEnter` 守卫 **不能** 访问 `this`，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给 `next`来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

注意 `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫。对于 `beforeRouteUpdate` 和 `beforeRouteLeave` 来说，`this` 已经可用了，所以**不支持**传递回调，因为没有必要了。

```js
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
this.boo = !this.boo;
this.$router.push({ path: "/", query: {d: this.boo ? new Date() : ""}});
```

这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 `next(false)` 来取消。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

## [#](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#完整的导航解析流程)完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。



## 五、vuex的基本使用

- state：存储状态（变量）
- getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
- mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
- actions：异步操作。在组件中使用是$store.dispath('')
- modules：store的子模块，为了开发大型项目，方便状态管理而使用的。

 ```js

export default new Vuex.Store({
  state: { //存储共享状态的数据源 可以在任何组件访问该状态数据
    count: 0
  },
  mutations: {//修改状态数据的同步方法
     mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
  },
  actions: {//修改状态数据的异步方法
      actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
      },
      actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
      }
  },
    getters:{//计算属性，用于对store中的数据进行处理形成新的数据,不会修改数据源
        getterCount(state) {
       	 return "当前的数据是" + state.count
   		}
    },
  modules: {//方便管理。配置公共模块
  }
})

 ```

```js
 <h3>{{$store.state.count}}</h3>
<h3>{{$sotre.getters.getterCount}}</h3>
methods: {
    handleAddClick(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount',n);
    }
  }
methods:{
handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    }
}


```



## 商城页面还原

### 1.配置Vant-ui

https://vant-contrib.gitee.io/vant/#/zh-CN/

### 2.还原页面

### 3.编写商城业务逻辑

### 4.项目打包

## mock数据的使用

1. 官方文档
本文默认你对Mock.js有一定的了解，并且阅读过Mock.js的官方文档，因此本文就不在赘述关于Mock.js的基础知识。

Mock.js官方文档地址：http://mockjs.com/


Mock.js是一门生成随机数据，为前端Ajax请求提供数据接口的前端框架技术，主要是为了适应前后端独立开发，为前端开发提供虚拟的后台数据接口，供前端调试开发。




1.添加Mock.js

### npm i mockjs -S

2.封装Mock.js
先添加一个mock.js文件

mock.js代码如下

```js
import Mock from 'mockjs' // 引入mockjs

import data from './data.json'

Mock.mock('/data', 'get', data )

```



## 打包生成安卓apk

# [用HBuilderX 打包 vue 项目 为 App 的步骤](https://www.cnblogs.com/taohuaya/p/10263519.html)



首先打包你的 vue 项目 生成 dist 文件夹，教程请移步 https://www.cnblogs.com/taohuaya/p/10256670.html

看完上面的教程，请确保 你是 将：

项目目录下的`config`文件夹里的`index.js`文件中,将`build`对象下的`assetsPublicPath`中的`“/”`，改为`“./”后，打包生成的 dist 文件。`

 

开始使用 HBuiderX 打包。（工具下载地址：http://www.dcloud.io/）

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113174958190-1961690000.png)

 

 ![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175047258-78712569.png)

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175107529-1990089405.png)

 这是我vue 项目打包后的dist 文件。

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175128189-177809906.png)

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175147090-1271127839.png)

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175209513-349296325.png)

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175225224-55482666.png)

 

 

 

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175239034-1174053594.png)

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175303217-1410223127.png)

 

 

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175311945-672258232.png)

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175333646-1284258744.png)

 

 设置沉浸状态栏：（什么是沉浸状态栏和设置方法 请移步： http://ask.dcloud.net.cn/article/32 地址里的 http://ask.dcloud.net.cn/article/1150）![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113180101536-1914796800.png)

 上图中添加位置的代码：

```
        "statusbar": { //应用可视区域到系统状态栏下透明显示效果
            "immersed": true
        },
```

 

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175356382-1462189304.png)

 

 

![img](https://img2018.cnblogs.com/blog/1249006/201901/1249006-20190113175414183-786129909.png)

###  解决返回按钮问题

 ```js
 <script type="text/javascript">
 			document.addEventListener('plusready', function() {
 				var webview = plus.webview.currentWebview();
 				var first = null;
 				plus.key.addEventListener('backbutton', function() {
 					webview.canBack(function(e) {
 						if (e.canBack) {
 							webview.back(-1);
 						} else {
 							//首页返回键处理
 							//处理逻辑：3秒内，连续两次按返回键，则退出应用；
 
 							//首次按键，提示‘再按一次退出应用’
 							if (new Date().getTime() - first < 3000) {
 								// console.log("关闭程序")
 								plus.runtime.quit();
 							} else {
 								//自定义的弹窗 （引入的vant.js 的toast）
 
 								alert("再按一次退出应用")
 								first = new Date().getTime();
 							}
 						}
 					})
 				});
 			});
 		</script>
 ```

