import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/style.scss";

Vue.prototype.baseUrl = process.env.BASE_URL;
Vue.prototype.$brdge = function() {
  try {
    document.getElementsByClassName("nb-icon-wrap")[0].click();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

Vue.config.productionTip = false;

new Vue({
  data() {
    return {};
  },
  router,
  render: h => h(App)
}).$mount("#app");
