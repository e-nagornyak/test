import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { z } from "zod"

import type { AuthTokens, User } from "@/types/auth"
import { generateTokens, readDatabase, writeDatabase } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")

    if (!accessToken) {
      return NextResponse.json(null)
    }

    const db = await readDatabase()
    const session = db.sessions.find(
      (s) => s?.tokens?.accessToken === accessToken?.value
    )

    if (!session) {
      return NextResponse.json(null)
    }

    return NextResponse.json(session)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error retrieving session" },
      { status: 500 }
    )
  }
}

const schema = z.object({
  email: z.string().email("Invalid email format"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsedData = schema.safeParse(body)

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.format() },
        { status: 400 }
      )
    }

    const { email } = parsedData.data
    const db = await readDatabase()
    const user = db.users.find((u: User) => u.email === email)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    let session = db.sessions.find((s) => s?.user?.id === user?.id)

    if (session) {
      return NextResponse.json({ session })
    }

    const tokens: AuthTokens = generateTokens(user)
    const expires = new Date(Date.now() + 60 * 60 * 1000).toISOString()

    session = { user, expires, tokens }

    db.sessions.push(session)
    await writeDatabase(db)

    return NextResponse.json({ session })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error creating session" },
      { status: 500 }
    )
  }
}
