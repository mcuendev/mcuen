"use client";

import { getLocalizedNavItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "../../ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import LanguageSelector from "./components/LanguageSelector";
import { getTranslations, SupportedLanguage } from "@/translations/intl";
import { HTMLAttributes } from "react";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  isAuthenticated: boolean;
  lang: SupportedLanguage;
}

const Navbar = ({ isAuthenticated, lang }: NavbarProps) => {
  const t = getTranslations(lang);
  const localizedNavItems = getLocalizedNavItems(lang);

  return (
    <nav className="fixed w-full flex items-center justify-between gap-6 p-4 md:px-10 border-b bg-white/60 backdrop-blur-sm">
      <h1>
        <Link href={`/${lang}`}>{siteConfig.name}</Link>
      </h1>

      <div className="flex gap-4">
        {localizedNavItems.map((item) => {
          // Skip if it's an admin route and user is not authenticated
          // or if it's a protected route and user is authenticated
          if (
            (!isAuthenticated && item.showAdmin) ||
            (isAuthenticated && item.showAdmin === false)
          ) {
            return null;
          }

          return (
            <Button
              key={item.type === "translated" ? item.titleKey : item.title}
              variant="ghost"
              asChild
            >
              <Link
                href={
                  item.type === "translated"
                    ? siteConfig.getLocalizedPath(item.baseHref, lang)
                    : item.href
                }
              >
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
        <LanguageSelector currentLang={lang} />
      </div>
    </nav>
  );
};
export default Navbar;
