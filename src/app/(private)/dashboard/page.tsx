import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getCurrentUser } from "@/lib/auth"
import { UserDashboardController } from "@/components/@controllers/user/user-dashboard-controller"

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(RoutePaths.auth.signIn)
  }

  return <UserDashboardController user={user} />
}
