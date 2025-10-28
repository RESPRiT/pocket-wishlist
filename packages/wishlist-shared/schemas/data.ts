import { z } from "zod";

export const IOTMSchema = z.object({
  img: z.string(),
  packaged_id: z.coerce.number(),
  packaged_name: z.string(),
  opened_ids: z.optional(
    z.union([z.coerce.number(), z.array(z.coerce.number())])
  ),
  opened_names: z.optional(z.union([z.string(), z.array(z.string())])),
  familiar_ids: z.optional(
    z.union([z.coerce.number(), z.array(z.coerce.number())])
  ),
  familiar_names: z.optional(z.union([z.string(), z.array(z.string())])),
  skill_ids: z.optional(
    z.union([z.coerce.number(), z.array(z.coerce.number())])
  ),
  skill_names: z.optional(z.union([z.string(), z.array(z.string())])),
  year: z.coerce.number(),
  month: z.optional(z.coerce.number()),
  speed_tier: z.optional(z.coerce.number()),
  aftercore_tier: z.optional(z.coerce.number()),
  tradeable: z.boolean(),
  type: z.string(),
  equipment_slot: z.optional(z.string()),
  is_ioty: z.optional(z.boolean()),
  is_con: z.optional(z.boolean()),
});

export type IOTM = z.infer<typeof IOTMSchema>;
