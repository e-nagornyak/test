import { type PropsWithChildren } from "react"
import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getCurrentUser } from "@/lib/auth"
import { DefaultSidebar } from "@/components/common/nav/default-sidebar"

export default async function layout({ children }: PropsWithChildren) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(RoutePaths.auth.signIn)
  }

  return (
    <div className={"flex flex-1 gap-4 p-2"}>
      <DefaultSidebar />
      {children}
    </div>
  )
}
