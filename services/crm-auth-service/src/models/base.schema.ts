import { z } from 'zod';

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  subscriptionPlan: z.enum(['starter', 'pro', 'enterprise']),
  createdAt: z.date(),
});

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.any().optional(),
  }).optional(),
  correlationId: z.string(),
});
