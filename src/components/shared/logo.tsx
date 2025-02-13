import { Hexagon } from "lucide-react"

import { RoutePaths } from "@/config/routes"
import { Link } from "@/components/ui/link"

export function Logo() {
  return (
    <Link
      href={RoutePaths.public.home}
      className={"flex items-center gap-2 text-2xl font-bold"}
    >
      <Hexagon
        className={
          "transition-colors duration-200 hover:fill-highlight-200 hover:text-highlight"
        }
      />
    </Link>
  )
}
