import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";

import { createRouter } from "@/lib/create-app";

const router = createRouter();

router.openapi(createRoute({
  method: "get",
  path: "/",
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        "application/json": {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: "Tasks API Index",
    },
  },

}), (c) => {
  return c.json({
    message: "Tasks API",
  }, HttpStatusCodes.OK);
});
