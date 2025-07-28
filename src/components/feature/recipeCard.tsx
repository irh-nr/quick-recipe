import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Recipe } from "@/lib/type";

type Props = {
  recipe: Recipe; // 👈 bukan Recipe[]
  showDescription: boolean;
};

export default function RecipeCard({ recipe, showDescription = true }: Props) {
  return (
    <Card
      key={recipe.id}
      className="flex flex-col justify-between pt-0 hover:scale-102 transition-transform duration-300"
    >
      <Image
        src={`/img/resep-img/${recipe.image}`}
        alt={recipe.title}
        width={600}
        height={400}
        className="object-cover rounded-lg w-full h-64"
      />
      <CardHeader className="flex-row gap-4 items-center pointer-events-none">
        <div>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.time} untuk memasak.</CardDescription>
        </div>
      </CardHeader>
      {showDescription && (
        <CardContent>
          <p>{recipe.description}</p>
        </CardContent>
      )}
      <CardFooter className="flex justify-between items-center">
        <Button asChild variant="outline">
          <Link href={`recipe/${recipe.slug}`}>Lihat Resep</Link>
        </Button>
        {recipe.quick && <Badge variant={"quick"}>Cepat!</Badge>}
      </CardFooter>
    </Card>
  );
}
