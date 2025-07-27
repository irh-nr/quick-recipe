import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { socials } from "@/lib/socials";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-logo">Quick Recipe!</SheetTitle>
          <SheetDescription>
            Temukan resep cepat dan mudah untuk hidangan lezat!
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start justify-start gap-2 p-4">
          <SheetClose asChild>
            <Link
              href={"/"}
              className="text-primary font-semibold text-xl hover:underline"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/recipe"}
              className="text-primary font-semibold text-xl hover:underline"
            >
              Recipe
            </Link>
          </SheetClose>
        </div>

        <div className="mt-auto flex flex-col text-center justify-start items-start text-sm text-primary gap-2 p-4">
          <span>
            <a href="/privacy-policy">
              <span className="text-muted-foreground">
                Privacy Policy (Coming Soon)
              </span>
            </a>
          </span>
          <span>QuickRecipe!</span>
          <span>&copy; 2025 Irhamna Nr</span>
          <div className="flex flex-row gap-2 mt-2">
            {socials.map(({ icon: Icon, url }, i) => (
              <div key={i}>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Icon color="black" className="size-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
