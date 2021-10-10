import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Button } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);


import "amfe-flexible/index";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
