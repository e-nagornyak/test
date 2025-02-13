import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getCurrentUser } from "@/lib/auth"
import { SingInInterceptedController } from "@/components/@controllers/auth/sign-in-intercepted-controller"

export default async function Page() {
  const user = await getCurrentUser()

  if (user) {
    redirect(RoutePaths.public.home)
  }

  return <SingInInterceptedController />
}
