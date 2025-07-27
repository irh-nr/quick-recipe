import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/lib/type";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";

export function RecipeImgMarquee({ recipes }: { recipes: Recipe[] }) {
  return (
    <InfiniteSlider speed={50} speedOnHover={20} reverse>
      {recipes.map((resep) => (
        <div
          key={resep.id}
          className="hover:scale-105 transition-transform duration-300"
        >
          <Link href={`/recipe/${resep.slug}`}>
            <Image
              src={`/img/resep-img/${resep.image}`}
              alt={resep.title}
              width={50}
              height={50}
              className="object-cover h-64 w-64 rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>
        </div>
      ))}
    </InfiniteSlider>
  );
}
