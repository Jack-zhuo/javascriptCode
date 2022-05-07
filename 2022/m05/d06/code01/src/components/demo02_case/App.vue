<template>
    <div class="app-container">
        <div>李笑来--通往财富自由之路</div>
        <hr />
    </div>
    <my-header :title="title" :bgcolor="bgcolor" color="skyblue"></my-header>
</template>

<script>
import MyHeader from './MyHeader.vue'
export default {
    data(){
      return{
          title:'窮爸爸富爸爸',
          bgcolor:"red"
      }
    },
    components: {
        MyHeader
    }
}
</script>

<style lang="less" scoped>
.app-container{
    position:fixed;
    width: 100%;
    top:45px;
    text-align: center;
}
</style>