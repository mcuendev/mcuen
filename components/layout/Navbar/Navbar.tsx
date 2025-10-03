"use client";

import { getLocalizedNavItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "../../ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeAuth,
} from "@kinde-oss/kinde-auth-nextjs";
import LanguageSelector from "./components/LanguageSelector";
import { getTranslations } from "@/translations";
import { HTMLAttributes } from "react";
import { SupportedLanguage } from "@/translations/types";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  lang: SupportedLanguage;
}

const Navbar = ({ lang }: NavbarProps) => {
  const { isAuthenticated } = useKindeAuth();

  const t = getTranslations(lang);
  const localizedNavItems = getLocalizedNavItems(lang);

  return (
    <nav className="fixed z-10 w-full flex items-center justify-between gap-6 p-4 md:px-10 border-b bg-background/70 backdrop-blur-lg">
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
              className="font-serif"
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
