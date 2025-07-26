import { RecipeSection } from "@/sections/recipeSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { getAllRecipes, getFilteredRecipe } from "@/lib/actions";

type Props = {
  searchParams: Promise<{ search?: string }>;
};

export default async function Recipe({ searchParams }: Props) {
  const { search = "" } = await searchParams;
  const keyword = search.trim();
  const recipes = keyword
    ? await getFilteredRecipe(keyword)
    : await getAllRecipes();

  return (
    <main>
      <div className="p-4">
        <div className="flex">
          <form
            action="/recipe"
            method="GET"
            className="flex w-full max-w-sm mx-auto items-center gap-2"
          >
            <Input
              type="search"
              name="search"
              placeholder="Cari Sesuatu?"
              defaultValue={keyword}
            />
            <Button type="submit" variant="outline">
              <Search className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
      <div className="pt-4">
        <RecipeSection recipes={recipes} />
      </div>
    </main>
  );
}
