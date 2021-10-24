import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
  
//引入计算rem的js
// import "./assets/js/sizeRem";
import "amfe-flexible/index"

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  Uploader,
  Divider,
  Popup,
  Overlay,
  Loading,
  Dialog,
  ContactCard,
  Form,
  AddressEdit,
  AddressList,
  Field,
  CellGroup,
  SwipeCell,
  Icon,
  Stepper,
  Card,
  Checkbox,
  CheckboxGroup,
  Button,
  Swipe,
  SwipeItem,
  PullRefresh,
  List,
  Tab,
  Tabs,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  SubmitBar,
  Toast,
  Sidebar,
  SidebarItem,
  Grid, 
  GridItem,
  Image as VanImage
} from 'vant'


Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Uploader).use(Sidebar).use(SidebarItem).use(Grid).use(GridItem).use(VanImage);
Vue.use(Divider).use(Popup).use(Overlay).use(Loading).use(Dialog).use(Toast).use(ContactCard).use(Form).use(AddressEdit).use(AddressList).use(Field).use(CellGroup).use(Cell).use(SwipeCell).use(Icon).use(Stepper).use(Card).use(Button).use(Swipe).use(SwipeItem).use(PullRefresh).use(List).use(Tab).use(Tabs).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(SubmitBar).use(Checkbox).use(CheckboxGroup)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//引入数据
require('../data/mock')

// 阻止显示生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')