<template>
  <p>number:{{ number }}</p>
  <p>state:{{ state }}</p>
  <p>info:{{ info }}</p>
</template>

<script>
export default {
   name:'MyCount',
   props:{
     number:{
       type:Number,
       rerquied:true
     },
     state:Boolean,
     info:[String,Number]
   }
}
</script>

<style>

</style>