import { Dock, Home, type LucideIcon } from "lucide-react"

import { RoutePaths } from "@/config/routes"

interface NavigationItem {
  title: string
  href: string
  icon: LucideIcon
}

const Navigation: NavigationItem[] = [
  {
    title: "Home",
    href: RoutePaths.public.home,
    icon: Home,
  },
  {
    title: "Dashboard",
    href: RoutePaths.private.dashboard,
    icon: Dock,
  },
]

export { Navigation }
