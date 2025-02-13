import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { z } from "zod"

import { RoleEnum, type Session } from "@/types/auth"
import { generateId, hashPassword, readDatabase, writeDatabase } from "@/lib/db"
import { env } from "@/lib/env"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
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

    const { name, email, password } = parsedData.data
    const db = await readDatabase()

    let user = db?.users?.find((u) => u?.email === email)

    if (!user) {
      user = {
        id: generateId(),
        name,
        email,
        password: await hashPassword(password),
        role: RoleEnum.User,
      }

      db?.users.push(user)
      await writeDatabase(db)
    }

    const sessionResponse = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/api/auth/session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    )

    const sessionData = await sessionResponse.json()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token = sessionData?.session?.tokens?.accessToken as string

    if (!token) {
      return NextResponse.json({ error: "No token found" }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore?.set("accessToken", token)

    return NextResponse.json(sessionData)
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    )
  }
}
