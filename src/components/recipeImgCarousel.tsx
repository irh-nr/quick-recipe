"use client"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
 } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";


interface Recipe  {
  id: number; 
  title: string;
  image: string;
  slug: string;
};

export function RecipeImgCarousel({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <Carousel 
        opts={{
        align: "start",
        loop: true,

      }}
        plugins={[Autoplay({
          delay: 5000, // Delay in milliseconds
          stopOnInteraction: false, // Continue autoplay even after user interaction
        })]}
        className="rounded-xl shadow-sm overflow-hidden"
      >
        <CarouselContent>
          {recipes.map((resep) => (
            <CarouselItem key={resep.id} className="pl-0 -ml-0">
                <Link href={`recipe/${resep.slug}`}>
                <div className="w-full aspect-[16/9]">
                    <img src={`/img/resep-img/${resep.image}`} alt="resep-img" className="w-full h-full object-cover"/>
                </div>
                </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
