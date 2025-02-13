import { ChevronDown, LogIn } from "lucide-react"

import type { User as UserType } from "@/types/auth"
import { Navigation } from "@/config/navigation"
import { cn } from "@/lib/cn"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import { Loader } from "@/components/ui/loader"
import { Text } from "@/components/ui/text"

interface DefaultNavUserProps {
  user?: UserType
  signOut: () => void
  isLoading?: boolean
  activePath: string
}

export function DefaultNavUser({
  user,
  signOut,
  isLoading,
  activePath,
}: DefaultNavUserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-full bg-highlight font-semibold uppercase text-white flexible-text-5">
          {user?.name?.[0] || ""}
        </span>
        <Text>{user?.name}</Text>
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex min-w-56 flex-col items-start justify-between p-4">
        {Navigation?.map((item) => (
          <DropdownMenuItem
            key={item.title}
            className={cn("w-full", { "bg-accent": item.href === activePath })}
          >
            <Link className={"flex items-center"} href={item.href}>
              <item.icon className="mr-2 size-5" />
              <Text>{item.title}</Text>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="mx-auto my-2 w-[95%]" />
        <DropdownMenuItem className={"w-full"}>
          <Button
            disabled={isLoading}
            className={"w-full"}
            variant="outline"
            onClick={signOut}
          >
            {isLoading ? <Loader /> : <LogIn />}
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
