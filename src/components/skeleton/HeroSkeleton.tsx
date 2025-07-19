
import { Skeleton } from "../ui/skeleton"

export function HeroSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Skeleton className="absolute min-h-[calc(100vh-96px)] w-full max-w-6xl rounded-xl" />
      <Skeleton className="h-20 md:h-10 w-3/5 md:w-2xl"/>
      <Skeleton className="h-4 w-2/3"/>
      <Skeleton className="h-4 w-xs md:w-3xl"/>
      <Skeleton className="p-4 h-10 w-20"/>
    </div>
  )
}
