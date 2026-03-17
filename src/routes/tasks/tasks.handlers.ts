import type { AppRouteHandler } from "@/lib/types";
import type { CreateRoute, ListRoute } from "@/routes/tasks/tasks.routes";

import db from "@/db";
import { tasks } from "@/db/schema";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const rows = await db.select({
    id: tasks.id,
    name: tasks.name,
    done: tasks.done,
    createdAt: tasks.createdAt,
    updatedAt: tasks.updatedAt,
  }).from(tasks);

  return c.json(rows);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const task = c.req.valid("json");
  const [inserted] = await db.insert(tasks).values(task).returning();

  return c.json(inserted);
};
