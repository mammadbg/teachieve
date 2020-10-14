import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import customCss from "./assets/css/main.css";
import Logo from "./components/Navbars/Logo.vue";
import Navbar from "./components/Navbars/Navbar.vue";
Vue.config.productionTip = false;
Vue.component("logo", Logo);
Vue.component("navbar", Navbar);
Vue.use(customCss);
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
