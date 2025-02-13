import "server-only"

import crypto from "crypto"
import fs from "fs/promises"
import path from "path"
import jwt from "jsonwebtoken"

import type { AuthTokens, Session, User } from "@/types/auth"
import { env } from "@/lib/env"

const DB_PATH = path.join(process.cwd(), "database.json")
const SECRET_KEY = env.SECRET_KEY || "secretKey"

interface Database {
  users: User[]
  sessions: Session[]
}

async function _isDatabaseExists() {
  try {
    await fs.access(DB_PATH)
  } catch {
    await fs.writeFile(
      DB_PATH,
      JSON.stringify({ users: [], sessions: [] }, null, 2)
    )
  }
}

async function readDatabase(): Promise<Database> {
  await _isDatabaseExists()
  const data = await fs.readFile(DB_PATH, "utf-8")
  return JSON.parse(data) as Database
}

async function writeDatabase(data: Database) {
  await _isDatabaseExists()
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2))
}

function generateId(): string {
  return crypto.randomBytes(16).toString("hex")
}

async function hashPassword(password: string): Promise<string> {
  return crypto.createHash("sha256").update(password).digest("hex")
}

function generateTokens(user: User): AuthTokens {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET_KEY,
    { expiresIn: "15m" }
  )
  const refreshToken = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: "7d",
  })

  return { accessToken, refreshToken }
}

export { hashPassword, readDatabase, writeDatabase, generateId, generateTokens }
