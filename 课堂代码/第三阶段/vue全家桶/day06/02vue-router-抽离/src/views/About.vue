<template>
    <div class="about">
       {{ title }}
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: "我是关于页面"
        }
    }
}
</script>
<style lang="scss" scoped>
    .about{
        color: red;
    }
</style>