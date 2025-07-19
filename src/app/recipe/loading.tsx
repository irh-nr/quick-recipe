import { CardSkeleton } from "@/components/skeleton/CardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";


export default function loading() {
    return (
        <main>
            <div className="p-4">
                <div className="flex w-full max-w-sm mx-auto items-center gap-2">
                    <Skeleton className="h-10 w-full"/>
                    <Skeleton className="h-10 w-10 rounded-lg"/>
                </div>
            </div>
            <div className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 12 }).map((_, i) => (
                    <CardSkeleton key={i}/>
                ))}
            </div>
            </div>
        </main>
    )
}