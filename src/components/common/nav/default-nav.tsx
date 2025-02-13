import { LogIn } from "lucide-react"

import type { User as UserType } from "@/types/auth"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"
import { DefaultNavUser } from "@/components/common/nav/default-nav-user"

interface DefaultNavProps {
  user?: UserType
  signOut: () => void
  signIn: () => void
  isLoading?: boolean
  activePath: string
}

export const DefaultNav = ({
  signIn,
  signOut,
  isLoading,
  user,
  activePath,
}: DefaultNavProps) => {
  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <DefaultNavUser activePath={activePath} user={user} signOut={signOut} />
      ) : (
        <Button disabled={isLoading} variant="outline" onClick={signIn}>
          {isLoading ? <Loader /> : <LogIn />}
          Log in
        </Button>
      )}
    </div>
  )
}
