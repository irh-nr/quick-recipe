import { HeroSkeleton } from "@/components/skeleton/HeroSkeleton"


export default function loading() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)]">
                <HeroSkeleton></HeroSkeleton>
            </div>
        </main>
    )
}