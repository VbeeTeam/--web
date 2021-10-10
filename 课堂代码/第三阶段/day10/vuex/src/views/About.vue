<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>数据：{{$store.state.count}}</p>
    <button @click="add">加法</button>
    <button @click="addNum">加法N</button><br />
    <button @click="reduce">减法</button>
    <button @click="reduceNum">减法N</button>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  methods: {
    // 第一种方法异步修改
    add(){
      this.$store.dispatch("addSync")
    },
    // 第一种方法异步修改，携带参数
    addNum(){
      this.$store.dispatch("addNumSync", 2)
    },
    // 第二种方法异步修改
    ...mapActions(["reduceSync","reduceNumSync"]),
    reduce(){
      this.reduceSync();
    },
    // 第二种方法异步修改,携带参数
    reduceNum(){
      this.reduceNumSync(2);
    }
  }
}
</script>
