import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./router";
import * as Sentry from "@sentry/vue";

const app = createApp(App);

app.use(router);

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  tracesSampleRate: 1.0,
});

app.mount("#app");
