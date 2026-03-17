import createApp from "@/lib/create-app";

import configOpenAPI from "./lib/config-open-api";

const app = createApp();
configOpenAPI(app);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", () => {
  throw new Error("Error route");
});

export default app;
