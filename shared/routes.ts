import { z } from "zod";

// ============================================================
// PURE ZOD SCHEMAS — safe to import on the client
// No drizzle-orm imports here
// ============================================================

export const errorSchemas = {
  validation: z.object({ message: z.string(), field: z.string().optional() }),
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

// Consultation
export const consultationInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional().nullable(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Coating system (response shape)
export const coatingSystemSchema = z.object({
  id: z.number(),
  series: z.string(),
  name: z.string(),
  description: z.string(),
  environment: z.string(),
  durability: z.string(),
  surfacePreparation: z.string(),
});

// Consultation response shape
export const consultationResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  company: z.string(),
  email: z.string(),
  phone: z.string().nullable().optional(),
  message: z.string(),
  status: z.string().nullable().optional(),
  userId: z.string().nullable().optional(),
  createdAt: z.union([z.string(), z.date()]).nullable().optional(),
});

// ============================================================
// API CONTRACT
// ============================================================
export const api = {
  consultations: {
    create: {
      method: "POST" as const,
      path: "/api/consultations" as const,
      input: consultationInputSchema,
      responses: {
        201: consultationResponseSchema,
        400: errorSchemas.validation,
      },
    },
    listMy: {
      method: "GET" as const,
      path: "/api/user/consultations" as const,
      responses: {
        200: z.array(consultationResponseSchema),
        401: errorSchemas.internal,
      },
    },
  },
  coatingSystems: {
    list: {
      method: "GET" as const,
      path: "/api/systems" as const,
      input: z.object({
        environment: z.string().optional(),
        series: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(coatingSystemSchema),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

// ============================================================
// TYPE EXPORTS — inferred from Zod, no drizzle dependency
// ============================================================
export type ConsultationInput = z.infer<typeof consultationInputSchema>;
export type ConsultationResponse = z.infer<typeof consultationResponseSchema>;
export type CoatingSystemResponse = z.infer<typeof coatingSystemSchema>;

// Auth user type (mirrors DB schema but as plain TS interface)
export interface User {
  id: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
}
