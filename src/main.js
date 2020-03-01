import Vue from "vue";
import { Button } from "ant-design-vue"; // 按需引入 ant-design-vue 组件
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*
  注册引入的组件
*/
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
