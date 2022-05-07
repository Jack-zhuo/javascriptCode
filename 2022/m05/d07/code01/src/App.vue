<template>
  <div>这是一个根组件</div>
  <!-- <hr/>
  <hello-world :id="2001010454" name="卓越" :age="22"></hello-world>
  <hr/>
  <compute-count></compute-count>
  <hr/>
 
  -->
  <button @click="count += 1">father---- +1</button>
  <p>{{ count }}</p>
  <my-counter v-model:number="count"></my-count>
  
</template>

<script>
import HelloWorld from "./components/01_HelloWorld.vue"
import Compute from "./components/02_compute.vue"
import MyCount from "./components/03_emit.vue"
import MyCounter from "./components/04_Counter.vue"
export default {
  name:"MyApp",
  data(){
    return{
      count:0
    }
  },
  components:{
    HelloWorld,
    ComputeCount: Compute,
    MyCount,
    MyCounter
  },
  methods: {
    getCount(a){
      console.log("run!!!!!"+a)
    }
  },
}
</script>

<style>

</style>