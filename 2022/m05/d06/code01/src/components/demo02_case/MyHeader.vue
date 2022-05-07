<template>
  <div class="head-container" :style="{backgroundColor: bgcolor,color:color}">
      {{ title }}
  </div>
</template>

<script>
export default {
     name:'MyHeader',
     props:['title','bgcolor','color'],
     data(){
         return {
             
         }
     }
}
</script>

<style lang="less" scoped>
  .head-container{
      height: 45px;
      width: 100%;
      background-color: pink;
      text-align: center;
      line-height: 45px;
      position:fixed;
      top:0;
      left: 0;
      z-index: 999;
  }
</style>