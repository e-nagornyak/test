import { type User } from "@/types/auth"
import { UserDashboard } from "@/components/common/user/user-dashboard"

interface UserDashboardControllerProps {
  user: User
}

export function UserDashboardController({
  user,
}: UserDashboardControllerProps) {
  return <UserDashboard user={user} />
}
