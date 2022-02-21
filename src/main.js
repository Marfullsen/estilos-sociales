import { createApp, ref } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// materializeCss
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

const app = createApp(App);
app.config.globalProperties.$token = ref("-");
app.use(router).mount("#app");
