import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVfm } from "vue-final-modal";
import "normalize.css";
import "./assets/css/style.css";
import "vue-final-modal/style.css";
import App from "./App.vue";
import router from "./router/router.ts";

const vfm = createVfm();
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vfm);
app.use(router);

app.mount("#app");
