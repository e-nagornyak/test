"use client"

import { RoutePaths } from "@/config/routes"
import { showErrorToast } from "@/lib/handle-error"
import { type SignInFormData } from "@/lib/validations/auth"
import { useAuth } from "@/hooks/use-auth"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { SignInForm } from "@/components/common/auth/sign-in-form"

export function SingInInterceptedController() {
  const { signIn, loading } = useAuth()

  const { isPending, lazyPush, lazyBack } = useLazyRouter()

  const onSubmit = async (data: SignInFormData) => {
    try {
      await signIn(data)
      lazyPush(RoutePaths.private.dashboard)
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <Dialog defaultOpen onOpenChange={lazyBack}>
      <DialogContent>
        <DialogTitle>Sign in</DialogTitle>
        <SignInForm onSubmit={onSubmit} isPending={loading || isPending} />
      </DialogContent>
    </Dialog>
  )
}
