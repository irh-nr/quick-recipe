import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative w-full min-h-[calc(90vh-96px)] overflow-hidden rounded-xl">
      <Image
        src="/img/cooking-unsplash.jpg"
        alt="cooking-bg"
        style={{ objectFit: "cover" }}
        fill
        className="w-full h-full inset-0 z-0 opacity-100"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10 z-10" />
      {/*blur effect */}
      <div
        id="hero"
        className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-1 pt-4"
      >
        <h1 className="typography-h1 text-shadow-md text-secondary text-center p-4">
          Selamat Datang di QuickRecipe!
        </h1>
        <span className="px-5">
          <p className="text-center text-shadow-md text-secondary">
            Temukan resep cepat dan mudah untuk hidangan lezat!
          </p>
          <p className="text-center text-shadow-md text-secondary">
            Aplikasi ini dibuat dengan Next.js, TypeScript, dan Tailwind CSS.
          </p>
        </span>
        <div className="p-2">
          <Button asChild className="mt-4" variant="transparent">
            <Link href="#get-started">Mulai</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
