"use client"

import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react"
import { localStorage } from "@/utils/localStorage"

import { type Session } from "@/types/auth"
import { AUTH_API } from "@/lib/api/routes-auth-api"
import {
  type SignInRequestParams,
  type SignInResponse,
} from "@/lib/api/types-auth-api"
import { showErrorToast } from "@/lib/handle-error"

const SESSION_KEY = "auth_session"

interface AuthContextType {
  session: Nullable<Session>
  loading: boolean
  signIn: (
    credentials: SignInRequestParams
  ) => Promise<Nullable<SignInResponse>>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Nullable<Session>>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const loadSession = async () => {
    try {
      let storedSession = localStorage.getItem<Session>(SESSION_KEY)

      if (!storedSession) {
        storedSession = await AUTH_API.getSession()
      }

      if (!storedSession) return null

      setSession(storedSession)
      localStorage.setItem(SESSION_KEY, storedSession)
    } catch (error) {
      showErrorToast(error)
      localStorage.removeItem(SESSION_KEY)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadSession()
  }, [])

  const signIn = async (credentials: SignInRequestParams) => {
    try {
      const response = await AUTH_API.signin(credentials)

      if (!response) return null

      setSession(response.session)
      localStorage.setItem(SESSION_KEY, response.session)
      return response
    } catch (error) {
      showErrorToast(error)
      return null
    }
  }

  const signOut = async () => {
    try {
      await AUTH_API.signout()
      setSession(null)
      localStorage.removeItem(SESSION_KEY)
    } catch (error) {
      showErrorToast(error)
    }
  }

  return (
    <AuthContext.Provider value={{ session, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
