"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import RecipeCard from "./recipeCard";

import { Recipe } from "@/lib/type";

export function RecipeCardCarousel({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="lg:max-w-xl max-w-2xs mx-auto p-2">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000, // Delay in milliseconds
            stopOnInteraction: false, // Continue autoplay even after user interaction
          }),
        ]}
      >
        <CarouselContent className="lg:-ml-6">
          {recipes.map((resep) => (
            <CarouselItem
              key={resep.id}
              className="lg:pl-6 py-4 lg:basis-[70%]"
            >
              <RecipeCard recipe={resep} showDescription={false} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
