"use client";

import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "../../ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import LanguageSelector from "./components/LanguageSelector";
import { useLanguage } from "@/context/language-context";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center justify-between gap-6 p-4 md:px-10 border-b">
      <h1>
        <Link href={"/"}>{siteConfig.name}</Link>
      </h1>

      <div className="flex gap-4">
        {navItems.map((item) => {
          // Skip if it's an admin route and user is not authenticated
          // or if it's a protected route and user is authenticated
          if (
            (!isAuthenticated && item.showAdmin) ||
            (isAuthenticated && item.showAdmin === false)
          ) {
            return null;
          }

          return (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href}>
                {item.type === "translated"
                  ? t[item.titleKey].title
                  : item.title}
              </Link>
            </Button>
          );
        })}

        {isAuthenticated ? (
          <Button asChild>
            <LogoutLink>Logout</LogoutLink>
          </Button>
        ) : (
          <Button asChild>
            <LoginLink>Login</LoginLink>
          </Button>
        )}
        <LanguageSelector />
      </div>
    </nav>
  );
};
export default Navbar;
