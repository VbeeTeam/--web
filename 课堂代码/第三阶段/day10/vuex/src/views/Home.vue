<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 第一种获取state数据的方式 -->
    <p>数据：{{$store.state.count}}</p>
    <!-- 第二种获取state数据的方式 -->
    <h4>{{ count }}</h4>
    <button @click="add">修改数据+</button>
    <button @click="addNum">修改数据+N</button><br />
    <button @click="reduce">修改数据-</button>
    <button @click="reduceNum">修改数据-N</button>
    <!-- getters第一种访问使用方法 -->
    <h6>{{$store.getters.newCount}}</h6>
    <!-- getters第二种访问使用方法 -->
    <h5>{{ newCount }}</h5>
  </div>
</template>

<script>
// 1.从vuex中按需求导入mapState函数
import { mapState, mapMutations, mapGetters} from "vuex"
export default {
  name: 'Home',
  components: {
  },
  // 通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
  // 2. 将全局数据，映射为当前组件的计算属性
  computed :{ 
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  methods:{
    add(){
      // 第一种mutations修改state数据的方法
      // commit提交mutations同步修改方法，
      // 第一个参数是mutations属性里的方法
      this.$store.commit('mutationsAdd');
      
    },
    addNum(){
      // 第二个参数是传递的动态参数
      this.$store.commit('mutationsAddNum', 2);
    },
    // 第二种mutations修改state数据的方法
    // 将指定的mutations函数,映射为当前组件的methods函数
    ...mapMutations(['mutationsReduce',"mutationsReduceNum"]),
    reduce(){
      this.mutationsReduce()
    },
    reduceNum(){
      this.mutationsReduceNum(2)
    } 
  }
}
</script>
