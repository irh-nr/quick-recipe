"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./ui/pagination";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface Recipe {
  title: string;
  image: string;
  time: string;
  description: string;
  quick: boolean;
  id: string;
  slug: string;
}

const ITEMS_PER_PAGE = 6; // Set the number of items per page

export function RecipeSection({ recipes }: { recipes: Recipe[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1"); // Get the current page from search params, default to 1
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE); // Calculate total pages
  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return recipes.slice(start, start + ITEMS_PER_PAGE);
  }, [page, recipes]);
  const handlePageChange = (p: number) => {
    router.push(`/recipe?page=${p}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedData.map((resep) => (
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
              <Button asChild variant="outline">
                <Link href={`recipe/${resep.slug}`}>Lihat Resep</Link>
              </Button>
              {resep.quick && (
                <Badge className={badgeVariants({ variant: "quick" })}>
                  Cepat!
                </Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/recipe?page=${page - 1}`}
                aria-disabled={page === 1}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href={`/recipe?page=${pageNum}`}
                    isActive={pageNum === page}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={`/recipe?page=${page + 1}`}
                aria-disabled={page === totalPages}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
