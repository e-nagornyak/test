type ISODateString = string

enum RoleEnum {
  Admin = "admin",
  User = "user",
}

interface Session {
  user?: User
  expires: ISODateString
  tokens: AuthTokens
}

interface AuthTokens {
  accessToken: string
  refreshToken: string
}

interface User {
  id: string
  name: string
  email: string
  image?: string
  role: RoleEnum
  password: string
}

export { type User, type AuthTokens, type Session, RoleEnum }
