// components/feature/contact-form-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function ContactFormSkeleton() {
  return (
    <main className="fade-In">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-evenly">
        {/* Form Skeleton */}
        <Card className="max-w-2xl p-4 w-full">
          <Skeleton className="w-full h-screen" />
        </Card>

        {/* Heading Skeleton */}
        <div className="flex flex-col gap-2 items-center lg:items-start lg:justify-start justify-center p-4">
          <Skeleton className="h-16 lg:h-16 w-60 lg:w-80" />
          <Skeleton className="hidden lg:flex h-16 w-30" />
        </div>
      </div>
    </main>
  );
}
