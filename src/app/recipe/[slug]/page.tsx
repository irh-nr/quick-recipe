import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getAllRecipesBySlug } from "@/lib/actions";

interface Recipe {
  slug: string;
}

export default async function Page({ params }: { params: Promise<Recipe> }) {
  const { slug } = await params;
  const resep = await getAllRecipesBySlug(slug);
  return (
    <main>
      <div className="p-2 pl-0">
        <Button variant="ghost" asChild>
          <Link href="/recipe" className="text-muted-foreground">
            <ChevronLeft />
            Kembali
          </Link>
        </Button>
      </div>
      <div className="p-4 shadow-md rounded-xl fade-In">
        <div className="flex flex-col-reverse md:flex-row justify-center lg:justify-between">
          <div className="flex flex-col gap-4 pt-8 lg:pt-0">
            <div
              id="Title"
              className="flex flex-col gap-2 items-center text-center md:text-start md:items-start"
            >
              <h1 className="typography-h1">{resep.title}</h1>
              <div className="flex text-muted-foreground gap-2 pl-2">
                <span>Waktu Memasak</span>
                <span>·</span>
                <p>{resep.time}</p>
              </div>
            </div>
            <div id="Ingredient" className="p-2 pt-4">
              <h3 className="typography-h3 text-center md:text-start">
                Bahan-bahan
              </h3>
              <ul className="p-2 list-disc ml-6">
                {resep.ingredients.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div id="Steps" className="p-2 pt-0">
              <h3 className="typography-h3 text-center md:text-start">
                Langkah-langkah
              </h3>
              <ul className="p-2 list-decimal ml-6 [&>li]:mt-1">
                {resep.steps.map((item: string, i: number) => (
                  <li key={i} className="">
                    {item}
                  </li>
                ))}
              </ul>
              <div id="Note" className="p-2 pt-4">
                <h3 className="typography-h3 mb-2 text-center md:text-start">
                  Notes
                </h3>
                <p className="p-2 typography-inline text-center md:text-start">
                  {resep.notes}
                </p>
              </div>
            </div>
          </div>
          <div
            id="Recipe-img"
            className="relative w-full max-w-screen md:max-w-sm rounded-2xl shadow-md aspect-[4/3] md:aspect-[3/4]"
          >
            <Image
              src={`/img/resep-img/${resep.image}`}
              alt="Recipe-img"
              style={{ objectFit: "cover" }}
              fill
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
