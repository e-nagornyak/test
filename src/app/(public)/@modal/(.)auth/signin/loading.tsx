import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <span className="sr-only">Loading...</span>
      <div
        className={"fixed flex flex-col items-center justify-center indent-0"}
      >
        <Skeleton className={"h-96 w-full max-w-screen-sm"} />
      </div>
    </>
  )
}
