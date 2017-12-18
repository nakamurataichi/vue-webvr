import Vue from "vue";
import appOptions from "./components/app.vue";
import "aframe";

document.addEventListener("DOMContentLoaded", function() {
  const app = new Vue(appOptions).$mount("#app");
});
