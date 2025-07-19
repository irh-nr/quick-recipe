import { Button, buttonVariants } from "@/components/ui/button";
import { 
    Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription, } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right" >
          <SheetHeader>
          <SheetTitle className="text-logo">Quick Recipe!</SheetTitle>
          <SheetDescription>
            Temukan resep cepat dan mudah untuk hidangan lezat! 
          </SheetDescription> 
        </SheetHeader> 
            <div className="flex flex-col items-start justify-start gap-2">
              <Link href={"/"}>
                <Button variant="link">
                  Home
                </Button>
              </Link>
             <Link href={"/recipe"}>
              <Button variant="link">
                  Recipe
                </Button>
             </Link>
             </div>
        </SheetContent>
    </Sheet>
  )
}
