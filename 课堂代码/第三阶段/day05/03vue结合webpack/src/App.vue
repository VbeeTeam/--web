<template>
    <div>
        <h1>我是vue的APP组件-{{ msg }}</h1>
        <!-- 在模板调用 -->
        <Top></Top>
        <!-- 单标签组件 -->
        <Bot />
    </div>
</template>
<script>
    // 导入头部组件
    import Top from "./components/Top.vue";
    // 导入底部组件
    import Bot from "./components/Bottom.vue";

    // ES6默认导出对象
    export default {
        data(){
            return{
                msg: "我是根组件"
            }
        },
        components: {
            // 在组件注册
            Top,
            Bot
        }
    }

</script>

