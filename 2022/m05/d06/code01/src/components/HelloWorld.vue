<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{ bookname }}</p>
  <p>{{ author }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['bookname','author','msg'], 
  data() {
    return {
      count: 0,
      
    }
  }
}
</script>
