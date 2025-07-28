import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import MobileNav from "./mobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { UtensilsCrossedIcon } from "lucide-react";

export function NavBar() {
  return (
    <div className="relative flex flex-row items-center justify-between w-full h-16 px-4 bg-background border-b shadow-sm rounded-lg">
      <Link
        href={"/"}
        className="text-logo flex items-center justify-center gap-2"
      >
        <UtensilsCrossedIcon size={30} />
        <span className="hidden md:flex">QuickRecipe!</span>
      </Link>
      <div className="items-center justify-between hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={"/"}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={"/recipe"}>Recipe</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={"/#about"}>About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={"/contact"}>Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
      <div className="flex md:hidden gap-4">
        <ThemeToggle />
        <MobileNav />
      </div>
    </div>
  );
}
