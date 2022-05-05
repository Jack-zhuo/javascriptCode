<template>
  <h1>这是<i>app.vue</i>根组件</h1>
  <p>vscode laji</p>
  <p>vscode还是很不错的 {{ name }} </p>
  <p>当前的值是：{{ count }}</p>
  <button @click="addCount">+1</button>
  <my-hello></my-hello>
  <my-search></my-search>
  <my-test></my-test>
</template>

<script lang="ts">
import Search from './components/MySearch.vue'
export default {
  name:"MyApp",
  data(){
    return {
      name:"卓越",
      count:0
    }
  },
  methods: {
    addCount(){
      this.count++;
    }
  },
  components:{
    'my-search':Search,
  }
}
</script>

<style lang="less">
h1{
  color: pink;
  i{
    color: skyblue;
  }
}
</style>
