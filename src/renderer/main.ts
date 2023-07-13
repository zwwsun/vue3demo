import { createApp } from "vue";
import { createPinia } from "pinia";
import "./icon/style.css";
import "./style/index.less";
import "./utils/performance";
import App from "./App.vue";
import router from "./router";
import { errorHandler } from "@assets/tools";
import { i18nCreator } from "@assets/i18n";
import { injectDependencies } from "@common/remote-config";

const i18n = await i18nCreator();

const app = createApp(App);
const store = createPinia();
app.use(router);
app.use(store);
app.use(i18n);
errorHandler(app);

app.mount("#app");

injectDependencies({
    demo: "demo from main",
    anyObject: {
        val: 1,
    },
});
