import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// materializeCss
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

createApp(App).use(router).mount("#app");
