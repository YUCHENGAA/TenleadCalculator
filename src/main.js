import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

import App from "./App.vue";

const app = createApp(App);

// 建立 Pinia
const pinia = createPinia();

// 註冊全域套件
app.use(pinia);
app.use(ElementPlus);

app.mount("#app");
