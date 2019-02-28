import "shitajicss/docs/css/shitaji.min.css";
import ElementUI from "element-ui";
import locale from 'element-ui/lib/locale/lang/ja';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App.vue';
import router from "./router";

Vue.use(ElementUI, {locale})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
