import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <span className="sr-only">Loading...</span>
      <div className={"flex flex-1 flex-col items-center justify-center"}>
        <Skeleton className={"h-96 w-full max-w-screen-sm"} />
      </div>
    </>
  )
}
