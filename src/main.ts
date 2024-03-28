import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./lib/router";
import { store } from "./lib/store";

createApp(App).use(router).use(store).mount("#app");
