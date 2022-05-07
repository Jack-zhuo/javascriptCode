<template>
  <div>
    <h1>root component</h1>

    <hr />

    <todo-list :list="todolist"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/todo-list/TodoList.vue'
export default {
  
  name: 'MyApp',
  data() {
    return {
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ],
    }
  },
  components:{
    TodoList
  }
}
</script>

<style lang="less" scoped>
</style>