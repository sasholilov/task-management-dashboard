import { createApp } from "vue";
import { createPinia } from "pinia";
import "normalize.css";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router/router.ts";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
