import configOpenAPI from "@/lib/config-open-api";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";

const app = createApp();

const routes = [
  index,
];

configOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
