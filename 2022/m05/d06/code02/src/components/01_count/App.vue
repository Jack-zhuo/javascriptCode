<template>
    <h1>App根組件</h1>
    <hr />
    <my-count :state="state" :info="info"></my-count>
</template>

<script>
import MyCount from "./MyCount.vue"
export default {
    data() {
        return {
            
           number:333,
           state:true,
           info:'那些打不倒你的只會叫你更強。'
        }
    },
    components: {
        MyCount
    }
}
</script>

<style>
</style>