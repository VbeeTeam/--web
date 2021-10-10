import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    successList: [],
    detailObj: {}
  },
  mutations: {
    //实时购物车订单
    cartChange(state, list){
      state.cartList = list
    },
    //实时成交订单
    successChange(state, list){
      state.successList = list
    },
    //详情页参数
    detailInfo(state, obj){
      state.detailObj = obj
    }

  },
  actions: {
  },
  modules: {
  }
})
