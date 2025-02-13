import Image from "next/image"
import { Mail, UserRound } from "lucide-react"

import { type User } from "@/types/auth"
import { Card, CardContent } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

interface UserDashboard {
  user: User
}

export function UserDashboard({ user }: UserDashboard) {
  return (
    <Card className={"flex flex-1"}>
      <CardContent>
        <div className="flex items-center space-x-4">
          {user.image ? (
            <Image
              src={user.image || "/images/default_user.png"}
              alt="User avatar"
              className="size-16 rounded-full border"
            />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-full bg-gray-300 text-gray-600">
              {user.name.charAt(0)}
            </div>
          )}
          <div>
            <Title>{user.name}</Title>
            <div className={"flex items-center gap-2"}>
              <Mail size={20} />
              <Text>
                Email:&nbsp;
                <a href={`mailto:${user.email}`}></a>
                {user.email}
              </Text>
            </div>
            <div className={"flex items-center gap-2"}>
              <UserRound size={20} />
              <Text>Role: {user.role}</Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
