"use client"

import { RoutePaths } from "@/config/routes"
import { showErrorToast } from "@/lib/handle-error"
import { type SignInFormData } from "@/lib/validations/auth"
import { useAuth } from "@/hooks/use-auth"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SignInForm } from "@/components/common/auth/sign-in-form"

export function SignInController() {
  const { signIn, loading } = useAuth()

  const { isPending, lazyPush } = useLazyRouter()

  const onSubmit = async (data: SignInFormData) => {
    try {
      await signIn(data)
      lazyPush(RoutePaths.private.dashboard)
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <section className={"flex flex-1 flex-col items-center justify-center"}>
      <Card className={"size-full max-w-screen-sm"}>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm onSubmit={onSubmit} isPending={loading || isPending} />
        </CardContent>
      </Card>
    </section>
  )
}
