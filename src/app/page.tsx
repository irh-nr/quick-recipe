import { RecipeImgMarquee } from "@/components/feature/recipeImgMarquee";
import { Separator } from "@/components/ui/separator";
import { Hero } from "@/sections/Hero";
import { LihatResep } from "@/sections/LihatResep";
import { RecipeCardCarousel } from "@/components/feature/recipeCardCarousel";
import { TentangKami } from "@/sections/TentangKami";
import { getRandomRecipe } from "@/lib/actions";

export const metadata = {
  title: "Home | Quick Recipe",
};

export default async function HomePage() {
  const randomRecipes = await getRandomRecipe();
  return (
    <main className="fade-In">
      <section className="mb-20">
        <Hero />
      </section>
      <Separator />
      <div id="get-started">
        <LihatResep />
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-8 mt-4 p-6">
        <div>
          <h2 className="text-center md:text-left typography-h2">
            Memasak dengan cepat!
          </h2>
          <p className="text-center md:text-left typography-p">
            Lagi butuh ide makan apa, nih?
          </p>
        </div>
        <div>
          <RecipeCardCarousel recipes={randomRecipes} />
        </div>
      </div>
      <Separator />
      <div id="about" className="mb-20">
        <TentangKami />
      </div>
      <div className="flex flex-col w-full gap-8 mt-4 p-6">
        <h2 className="text-center md:text-left typography-h2">Galeri</h2>
        <div>
          <RecipeImgMarquee recipes={randomRecipes} />
        </div>
      </div>
    </main>
  );
}
