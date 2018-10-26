<template>
    <div>
        <mt-header :title='title'>
            <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
            <h1>{{title}}</h1>
        </mt-header>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['title'],
    methods:{
        goBack(){
            this.$router.go(-1);//根据浏览器历史纪录返回上一层
        }
    }
}
</script>
<style <style lang="scss" scoped>
    .mint-header{
        background-color: #f8f8f9
    }
    .mint-header .mint-button,.mint-header-title{
        color: black
    }
</style>


