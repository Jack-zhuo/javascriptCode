<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3.0 + Vite"
    :bookname="info.bookname"
    :author="info.author"
  />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      info: {
        bookname: "通往财富自由之路",
        author: "李笑来",
      },
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
