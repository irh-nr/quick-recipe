"use client";

import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Recipe } from "@/lib/type";
import RecipeCard from "../components/feature/recipeCard";

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

  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center h-[100vw]">
        <p className="text-muted-foreground text-shadow-2xs mt-5">
          Resep tidak ditemukan.
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedData.map((resep) => (
          <RecipeCard recipe={resep} key={resep.id} showDescription={true} />
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
