<template>
  <p>test</p>
  <input type="text" v-model.number="count">
  <p>{{count}} * 2 = {{ plus() }}</p>
  <p>{{count}} * 2 = {{ plus() }}</p>
  <p>{{count}} * 2 = {{ plus() }}</p>
</template>

<script>
export default {
   name:"MyCount",
   data() {
       return {
           count:4
       }
   },
   methods: {
       plus(){
           console.log("execute...")
           return this.count * 2;
       }
   },
//    computed:{
//           plus(){
//               console.log("execute...")
//               return this.count * 2;
//           }
//    }
}
</script>

<style>

</style>