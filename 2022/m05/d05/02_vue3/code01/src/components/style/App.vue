<template>
    <p>所有人都不断习得各种技能，不断积累，只不过很多人在20岁
        以后就停止了学习，所以没有机会在自己的未来体会到复利效应。</p>
    <h1 class="title">我是H1</h1>
    <list></list>
</template>

<script lang="ts">
  import list from './List.vue'; 
  export default{
      components:{
          list,
      }
  }
</script>

<style lang="less" scoped>
p{
    color: red;
}
::deep.title{
   color:blue;
}
</style>