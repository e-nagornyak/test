"use client"

import { usePathname } from "next/navigation"

import { Navigation } from "@/config/navigation"
import { cn } from "@/lib/cn"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"

export function DefaultSidebar() {
  const path = usePathname()

  return (
    <Card className={"hidden min-w-56 sm:block"}>
      <CardHeader>
        <CardTitle>Sidebar</CardTitle>
      </CardHeader>
      <CardContent className={"space-y-4"}>
        {Navigation?.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn("flex items-center gap-2 rounded-md p-2", {
              "bg-accent shadow-sm": item.href === path,
            })}
          >
            <item.icon className="mr-2 size-7" />
            <Text size={"lg"}>{item.title}</Text>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
