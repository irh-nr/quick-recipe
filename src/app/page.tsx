import { RecipeImgMarquee } from "@/components/recipeImgMarquee";
import { Separator } from "@/components/ui/separator";
import { Hero } from "@/sections/Hero";
import { LihatResep } from "@/sections/LihatResep";
import { RecipeCardCarousel } from "@/components/recipeCardCarousel";
import { TentangKami } from "@/sections/TentangKami";
import { getAllRecipes } from "@/lib/actions";

function getRandomItems<T>(arr: T[], n: number): T[] {
  return arr
    .map((value) => ({ value, sort: Math.random() })) // Tambahkan properti sort dengan nilai acak
    .sort((a, b) => a.sort - b.sort) // Urutkan
    .slice(0, n) // Ambil n item pertama
    .map(({ value }) => value); // Kembalikan hanya nilai tanpa properti
}

export default async function Home() {
  const recipes = await getAllRecipes();
  const randomRecipes = getRandomItems(recipes, 5); // Ambil 5 resep acak
  return (
    <main>
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
      <TentangKami />
      <div className="flex flex-col w-full gap-8 mt-4 p-6">
        <h2 className="text-center md:text-left typography-h2">Galeri</h2>
        <div>
          <RecipeImgMarquee recipes={randomRecipes} />
        </div>
      </div>
    </main>
  );
}
