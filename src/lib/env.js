import process from "process"
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SECRET_KEY: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_FRONTEND_URL: z.string().url().url(),
    NEXT_PUBLIC_API_URL: z.string().url().url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NODE_ENV: process.env.NODE_ENV,
    SECRET_KEY: process.env.SECRET_KEY,
  },

  emptyStringAsUndefined: true,
})
