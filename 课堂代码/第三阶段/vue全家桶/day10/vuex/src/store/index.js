import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //提供唯一的数据资源,所有的共享的数据都要统一放到store 中的state中进行存储
  state: {
    count: 0
  },
  // mutation用于变更store中的数据,同步修改
  mutations: {
    mutationsAdd(state){
      state.count ++;
    },
    mutationsAddNum(state, num){
      state.count += num;
    },
    mutationsReduce(state){
      state.count --;
    },
    mutationsReduceNum(state, num){
      state.count -= num;
    }
  },
  // actions用于变更store中的数据,异步修改，
  // 但是在Action中还是要通过触发Mutation的方式间接变更数据。
  actions: {
    addSync(context){
      context.commit("mutationsAdd")
    },
    addNumSync(context, num){
      context.commit("mutationsAddNum", num)
    },
    reduceSync(context){
      context.commit("mutationsReduce")
    },
    reduceNumSync(context, num){
      context.commit("mutationsReduceNum", num)
    }
  },
  // getter:Getter于对Store中的数据进行加工处理形成新的数据。
  // 他不会修改state中的原始数据起到的是包装数据的作用
  getters: {
    newCount(state){
      return "我是包装之后的最新的数量" + state.count
    }
  },
  // store的子模块，为了开发大型项目，方便状态管理而使用的。一般用于导入公共js模块
  modules: {
  }
})
