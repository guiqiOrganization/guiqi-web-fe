import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/style.scss";

Vue.prototype.baseUrl = process.env.BASE_URL;

Vue.config.productionTip = false;

new Vue({
  data() {
    return {};
  },
  router,
  render: h => h(App)
}).$mount("#app");
