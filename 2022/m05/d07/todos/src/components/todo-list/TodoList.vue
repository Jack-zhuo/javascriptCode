<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between
align-items-center" v-for="item in list" key="item.id">
      <!-- 复选框 -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="item.id" />
        <label class="custom-control-label" :for="item.id">{{item.task}}</label>
      </div>
      <!-- badge 效果 -->
      <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
      <span class="badge badge-warning badge-pill" v-else>未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  nmae: 'TodoList',
  props:{
    list:{
      type:Array,
      required:true,
      default:[]
    }
  }
}
</script>

<style lang="less" scoped>
</style>>

