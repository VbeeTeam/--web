<template>
  <div>
      <h1>我是登录组件{{hello}}</h1>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: "hello"
            }
        }
    }
</script>
<style lang="less" scoped>
    h1{
        color: red;
    }
</style>

