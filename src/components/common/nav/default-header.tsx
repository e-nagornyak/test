import * as React from "react"

import { DefaultNavController } from "@/components/@controllers/nav/default-nav-controller"
import { Logo } from "@/components/shared/logo"

export function DefaultHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-card p-2 px-4 shadow-sm">
      <div className={"flex items-center justify-between"}>
        <Logo />
        <DefaultNavController />
      </div>
    </header>
  )
}
