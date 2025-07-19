import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
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
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-logo">Quick Recipe!</SheetTitle>
          <SheetDescription>
            Temukan resep cepat dan mudah untuk hidangan lezat!
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start justify-start gap-2">
          <Link href={"/"}>
            <Button variant="link">Home</Button>
          </Link>
          <Link href={"/recipe"}>
            <Button variant="link">Recipe</Button>
          </Link>
        </div>
        <SheetFooter>
          <div className="flex flex-col text-center justify-start items-start text-sm text-primary gap-2">
            <span>
              <a href="">Privacy Policy</a>
            </span>
            <span>QuickRecipe!</span>
            <span>&copy; 2025 Irhamna Nr</span>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            {socials.map(({ icon: Icon, url }, i) => (
              <div key={i}>
                <Link href={url} target="blank">
                  <Icon color="black" className="size-5" />
                </Link>
              </div>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
