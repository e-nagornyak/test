import { cookies } from "next/headers"

import { type Session, type User } from "@/types/auth"
import { AUTH_API } from "@/lib/api/routes-auth-api"

const getServerSession = async (): Promise<Nullable<Session>> => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  if (!accessToken) {
    return null
  }

  return AUTH_API.getSession(accessToken)
}

const getCurrentUser = async (): Promise<Maybe<User>> => {
  const session = await getServerSession()
  return session?.user
}

export { getServerSession, getCurrentUser }
