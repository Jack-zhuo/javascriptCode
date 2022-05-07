<template>
  <p>count:{{ number }}</p>
  <button @click="add">son---- +1</button>
</template>

<script>
export default {
    name:"MyCounter",
    props:['number'],
    emits:['update:number'],
    methods: {
        add(){
            this.$emit('update:number',this.number+1);
        }
    },

}
</script>

<style>

</style>