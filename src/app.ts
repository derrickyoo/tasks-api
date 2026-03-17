import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { requestId } from "hono/request-id";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "./middleware/pino-logger";

expand(config());

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindings>();
app.use(requestId());
app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", () => {
  throw new Error("Error route");
});

app.notFound(notFound);
app.onError(onError);

export default app;
