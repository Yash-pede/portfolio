"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Braces } from "lucide-react";
import { menuItems, NavbarItems, SiteConfig } from "@/lib/config";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Braces />
          <p className="font-bold text-inherit">{SiteConfig.title}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NavbarItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={item.color ? (item.color as any) : "primary"}
              href="#"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
           Resume
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}