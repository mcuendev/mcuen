"use client";

import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "../ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between gap-6 p-4 md:px-10 border-b">
      <h1>
        <Link href={"/"}>{siteConfig.name}</Link>
      </h1>

      <div className="flex gap-4">
        {navItems.map((item) =>
          isAuthenticated
            ? item.showAdmin !== false && (
                <Button key={item.href} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              )
            : item.showAdmin !== true && (
                <Button key={item.href} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ),
        )}
        {isAuthenticated ? (
          <Button asChild>
            <LogoutLink>Logout</LogoutLink>
          </Button>
        ) : (
          <Button asChild>
            <LoginLink>Login</LoginLink>
          </Button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
