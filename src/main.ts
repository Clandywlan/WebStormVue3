import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/indexPage";
//引入组件库
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import 'tdesign-vue-next/dist/reset.css';

const app=createApp(App)
app.use(router)
app.use(TDesign)
app.mount('#app')

