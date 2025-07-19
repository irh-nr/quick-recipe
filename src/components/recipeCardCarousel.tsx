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
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Recipe {
  title: string,
  image: string,
  time: string,
  description: string,
  quick: boolean,
  id: string,
  slug: string,
};

export function RecipeCardCarousel({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="w-full mx-auto">
      <Carousel 
        opts={{
        align: "center",
        loop: true,

      }}
        plugins={[Autoplay({
          delay: 3000, // Delay in milliseconds
          stopOnInteraction: false, // Continue autoplay even after user interaction
        })]}
      >
        <CarouselContent className="-ml-6">
          {recipes.map((resep) => (
            <CarouselItem key={resep.id} className="pl-6 pb-4 basis-[80%] md:basis-[60%] lg:basis-[50%]">
              <div>
                 <Card className="flex flex-col justify-between">
                        <CardHeader className="flex-row gap-4 items-center select-none">
                          <Avatar>
                            <AvatarImage src={`/img/resep-img/${resep.image}`} alt={resep.title}/>
                            <AvatarFallback>{resep.title.slice(0,2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{resep.title}</CardTitle>
                            <CardDescription>{resep.time} untuk memasak.</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="select-none">
                          <p>{resep.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <Button asChild variant="outline">
                              <Link href={`recipe/${resep.slug}`}>Lihat Resep</Link>
                            </Button>
                          {resep.quick && <Badge variant={"quick"} className="select-none">Cepat!</Badge>}
                        </CardFooter>
                  </Card> 
              </div>
            </CarouselItem>
          ))}                                     
        </CarouselContent>
      </Carousel>
    </div>
  )
}
