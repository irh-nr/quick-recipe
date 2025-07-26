import { Skeleton } from "../ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="flex flex-col min-h-[calc(90vh-96px)] items-center justify-center gap-2">
      <Skeleton className="h-20 md:h-10 w-3/5 md:w-2xl" />
      <Skeleton className="h-4 w-xs md:w-3xl mt-4" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="p-4 h-10 w-20" />
    </div>
  );
}
