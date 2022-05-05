<template>
    <p>这是一个父组件</p>
    <my-article author="李笑来" title="通往财富自由之路"></my-article>
</template>

<script>
import MyArticle from './article.vue';
export default {
   components:{
       MyArticle
   }
}
</script>