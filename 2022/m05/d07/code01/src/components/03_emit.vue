<template>
  <p>count:{{ count }}</p>
  <button @click="add">+1</button>
</template>

<script>
export default {
   name:"my_counter",
   emits:['countChange'],
   data(){
       return {
           count:0
       }
   },
   methods: {
       add(){
           this.count++;
           this.$emit('countChange',this.count)
       }
      
   },

}
</script>

<style>

</style>