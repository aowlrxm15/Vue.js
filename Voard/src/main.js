/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./routers/index.js";
import store from "./store/index.js";
import axios from "axios";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(store);
app.mount("#app");

// axios 전역설정
axios.defaults.baseURL = "http://52.79.118.135:8787"; // 배포용
//axios.defaults.baseURL = "http://localhost:8787"; // 개발용
