import type { AppRouteHandler } from "@/lib/types";
import type { ListRoute } from "@/routes/tasks/tasks.routes";

export const handlerList: AppRouteHandler<ListRoute> = (c) => {
  return c.json([{
    name: "Learn Hono",
    done: false,
  }]);
};
