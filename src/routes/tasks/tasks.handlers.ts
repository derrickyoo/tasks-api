import type { AppRouteHandler } from "@/lib/types";
import type { ListRoute } from "@/routes/tasks/tasks.routes";

import db from "@/db";
import { tasks } from "@/db/schema";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const result = await db.select({
    name: tasks.name,
    done: tasks.done,
  }).from(tasks);

  return c.json(result);
};
