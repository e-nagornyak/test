import { type Session, type User } from "@/types/auth"

interface SignInRequestParams {
  name: string
  email: string
  password: string
}

interface SignInResponse {
  user: User
  session: Session
}

export type { SignInRequestParams, SignInResponse }
