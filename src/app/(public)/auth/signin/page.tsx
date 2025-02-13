import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getCurrentUser } from "@/lib/auth"
import { SignInController } from "@/components/@controllers/auth/sign-in-controller"

export default async function Page() {
  const user = await getCurrentUser()

  if (user) {
    redirect(RoutePaths.public.home)
  }

  return <SignInController />
}
