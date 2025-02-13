import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <span className="sr-only">Loading...</span>
      <Skeleton className={"h-screen w-screen"} />
    </>
  )
}
