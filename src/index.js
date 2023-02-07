import "./styles.css";
import { trackPageview, trackEvent } from "./analytics-api.js";

// Your code here
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");