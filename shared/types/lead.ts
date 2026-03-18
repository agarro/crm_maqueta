import { z } from "zod";

export const LeadSchema = z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  status: z.enum(["NEW", "QUALIFIED", "CLOSED", "LOST"]),
  createdAt: z.string().datetime(),
});

export type Lead = z.infer<typeof LeadSchema>;

export const ErrorResponseSchema = z.object({
  error: z.string(),
  code: z.string(),
  details: z.any().optional(),
});
