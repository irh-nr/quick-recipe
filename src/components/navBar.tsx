import React from 'react'
import {NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import MobileNav from './mobileNav';



export function NavBar() {
  return (
    <div className="relative flex flex-col-2 items-center justify-between w-full h-16 px-4 bg-white border-b shadow-sm rounded-lg">
            <Link href={"/"} className="text-logo">QuickRecipe!</Link>
            <div className="items-center justify-between hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>                                                   
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href={"/"}>Home</Link>
                      </NavigationMenuLink>                
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={"/recipe"}>Recipe</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
              <NavigationMenuViewport />
            </NavigationMenu>
              
            </div>   
              <div className="flex md:hidden">
                <MobileNav />
              </div>
          </div>
  )
}
