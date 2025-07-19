import {
  Card,
  CardHeader,
  CardAction,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge, badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

interface Recipe {
  title: string;
  image: string;
  time: string;
  description: string;
  quick: boolean;
  id: string;
  slug: string;
}

export async function recipeCard({ recipes }: { recipes: Recipe[] }) {
  return (
    <div>
      {recipes.map((resep) => (
        <Card key={resep.id} className="flex flex-col justify-between">
          <CardHeader className="flex-row gap-4 items-center">
            <Avatar>
              <AvatarImage
                src={`/img/resep-img/${resep.image}`}
                alt={resep.title}
              />
              <AvatarFallback>{resep.title.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{resep.title}</CardTitle>
              <CardDescription>{resep.time} untuk memasak.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>{resep.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <CardAction>
              <Button asChild variant="outline">
                <Link href={`recipe/${resep.slug}`}>Lihat Resep</Link>
              </Button>
            </CardAction>
            {resep.quick && (
              <Badge className={badgeVariants({ variant: "quick" })}>
                Cepat!
              </Badge>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
