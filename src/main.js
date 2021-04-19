import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "zingchart/es6";
import zingchartVue from "zingchart-vue";

Vue.config.productionTip = false;

Vue.component("zingchart", zingchartVue);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
