<template>
    <div>
        <h1>1{{title}}</h1>
        <h1>2{{author}}</h1>
    </div>
</template>

<script>
export default {
    name:'MyArticle',
    props:['title','author']
}
</script>