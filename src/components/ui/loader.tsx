import { Loader as LoaderIcon, type LucideProps } from "lucide-react"

import { cn } from "@/lib/cn"

export function Loader({ className, ...rest }: LucideProps) {
  return <LoaderIcon className={cn("animate-spin", className)} {...rest} />
}
