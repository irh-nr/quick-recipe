import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative w-full min-h-[calc(90vh-96px)] overflow-hidden rounded-xl">
        <Image 
        src="/img/cooking-unsplash.jpg" 
        alt="cooking-bg" 
        style={{ objectFit: 'cover' }}
        fill
        priority
        className="w-full h-full inset-0 z-0 opacity-100" 
        />
        
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10 z-10" />{/*blur effect */}
      <div className="absolute inset-0 bg-black/70 opacity-35 "/>{/*dark overlay */}
      <div id="hero" className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 pt-4" >
          <h1 className="typography-h1 text-shadow-md text-secondary text-center p-4 ">Selamat Datang di QuickRecipe!</h1>
          <p className="text-center text-shadow-md text-secondary px-6">Temukan resep cepat dan mudah untuk hidangan lezat!</p>
          <p className="text-center text-shadow-md text-secondary px-6">Aplikasi ini dibuat dengan Next.js, TypeScript, dan Tailwind CSS.</p>
          <div className="p-2">
            <Button asChild className="mt-4" variant="transparent">
              <Link href="#get-started">Mulai</Link>
            </Button>
          </div>
      </div>
    </div>
  )
}
