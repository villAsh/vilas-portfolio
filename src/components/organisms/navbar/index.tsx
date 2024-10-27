import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FloatingNav } from "@/components/ui/floating-navbar";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Skills",
    link: "/skills",
  },
  {
    name: "Socials",
    link: "/socials",
  },
];
export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
