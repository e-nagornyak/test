import { type ReactNode } from "react"

interface RootLayoutProps {
  children: ReactNode
  modal: ReactNode
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
