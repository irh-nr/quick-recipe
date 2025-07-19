import { RecipeSection } from "@/components/recipeSection";
import { SearchBar } from "@/components/searchBar";
import { getAllRecipes } from "@/lib/actions";

export default async function Recipe() {
  const recipes = await getAllRecipes();

  return (
    <main>
      <div className="p-4">
        <SearchBar />
      </div>
      <div className="pt-4">
        <RecipeSection recipes={recipes} />
      </div>
    </main>
  );
}
