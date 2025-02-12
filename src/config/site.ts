import { env } from "@/lib/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Name",
  description: "description",
  url: env.NEXT_PUBLIC_FRONTEND_URL,
}
