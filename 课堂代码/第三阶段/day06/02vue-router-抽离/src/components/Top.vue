<template>
    <div class="top">
        <h1>我是网页的头部-{{ msg }}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg: "我是网页头部的数据"
            }
        }
    }
</script>

<style lang="scss" scoped>
/* scoped:私有样式属性，只在当前组件起作用，不会影响影响其他组件的样式 */
// lang="scss" 设置当前样式为scss写法
.top{
    h1{
        color: aqua;
        font-style: initial;
    }
}
</style>
