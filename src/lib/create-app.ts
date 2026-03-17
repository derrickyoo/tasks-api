import { OpenAPIHono } from "@hono/zod-openapi";
import { requestId } from "hono/request-id";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import type { AppBindings } from "@/lib/types";

import { pinoLogger } from "@/middleware/pino-logger";

export function createRouter() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });

  return app;
}

export default function createApp() {
  const app = createRouter();

  app.use(serveEmojiFavicon("🔥"));
  app.use(requestId());
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
