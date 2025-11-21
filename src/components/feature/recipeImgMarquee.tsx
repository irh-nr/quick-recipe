import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/lib/type";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

export function RecipeImgMarquee({ recipes }: { recipes: Recipe[] }) {
  return (
    <InfiniteSlider speed={50} speedOnHover={20} reverse>
      {recipes.map((resep) => (
        <div key={resep.id}>
          <div className="overflow-hidden hover:scale-105 transition-transform duration-300 py-2">
            <Link href={`/recipe/${resep.slug}`}>
              <Image
                src={`/img/resep-img/${resep.image}`}
                alt={resep.title}
                width={400}
                height={400}
                className="object-cover h-64 w-64 rounded-lg"
              />
            </Link>
          </div>
        </div>
      ))}
    </InfiniteSlider>
  );
}
