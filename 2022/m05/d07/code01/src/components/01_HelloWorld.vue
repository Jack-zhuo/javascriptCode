<template>
  <h1>学号：{{ id }}</h1>
  <h1>名字：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>座右铭：{{ motto }}</h1>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    id: {
      type:Number,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      validator(e){
          return (e >0 && e <200 )
      }
    },
    motto:{
      type:String,
      default:"持续做对的事情，然后等待时间的回报。"
    }

  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
