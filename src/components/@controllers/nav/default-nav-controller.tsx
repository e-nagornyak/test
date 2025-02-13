"use client"

import { usePathname } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { showErrorToast } from "@/lib/handle-error"
import { useAuth } from "@/hooks/use-auth"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { DefaultNav } from "@/components/common/nav/default-nav"

export function DefaultNavController() {
  const { signOut, loading, session } = useAuth()
  const { lazyPush, isPending } = useLazyRouter()

  const path = usePathname()

  const user = session?.user

  const handleSignIn = () => {
    lazyPush(RoutePaths.auth.signIn)
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      lazyPush(RoutePaths.public.home)
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <DefaultNav
      user={user}
      signIn={handleSignIn}
      signOut={handleSignOut}
      isLoading={loading || isPending}
      activePath={path}
    />
  )
}
