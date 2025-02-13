import { type Session } from "@/types/auth"
import {
  type SignInRequestParams,
  type SignInResponse,
} from "@/lib/api/types-auth-api"
import { env } from "@/lib/env"

const BASE = `${env.NEXT_PUBLIC_API_URL}/api/auth`

const paths = {
  signin: `${BASE}/signin`,
  signout: `${BASE}/signout`,
  postSession: `${BASE}/session`,
  getSession: `${BASE}/session`,
}

const fetchWithAuth = async (
  path: string,
  method: string,
  body?: any,
  options?: HeadersInit
) => {
  const res = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json", ...options },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  })

  return res?.json()
}

export const AUTH_API = {
  signin: (credentials: SignInRequestParams): Promise<SignInResponse> =>
    fetchWithAuth(paths.signin, "POST", credentials),
  signout: (): Promise<{ message: string }> =>
    fetchWithAuth(paths.signout, "POST"),
  getSession: (accessToken?: string): Promise<Session> =>
    fetchWithAuth(paths.getSession, "GET", null, {
      cookie: `accessToken=${accessToken}`,
    }),
}
