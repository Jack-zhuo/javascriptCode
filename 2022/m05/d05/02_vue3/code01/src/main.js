import { createApp} from 'vue';
// import App from './components/style/App.vue';
import App from './components/props/App.vue';
import hello from './components/HelloWorld.vue';
import test from './components/test.vue';

const app = createApp(App);
// console.log(hello.name);
app.component(test.name,test);


app.mount('#app');