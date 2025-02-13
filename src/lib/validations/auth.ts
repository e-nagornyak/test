"use client"

import * as z from "zod"

const signInFormSchema = z.object({
  email: z.string().trim().email().max(255),
  name: z.string().trim().min(3).max(50),
  password: z.string().trim().min(6),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export { type SignInFormData, signInFormSchema }
