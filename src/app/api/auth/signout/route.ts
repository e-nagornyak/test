import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { readDatabase, writeDatabase } from "@/lib/db"

export async function POST() {
  try {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")

    if (!accessToken) {
      return NextResponse.json({ error: "No session found" }, { status: 401 })
    }

    const db = await readDatabase()

    db.sessions = db.sessions.filter(
      (s) => s?.tokens?.accessToken !== accessToken?.value
    )

    await writeDatabase(db)

    cookieStore.delete("accessToken")

    return NextResponse.json({ message: "Signed out successfully" })
  } catch (error) {
    console.log(error)

    return NextResponse.json({ error: "Error signing out" }, { status: 500 })
  }
}
