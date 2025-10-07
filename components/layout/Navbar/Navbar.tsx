"use client";

import { getLocalizedNavItems } from "@/config/nav";
import Link from "next/link";
import { Button } from "../../ui/button";
import { getTranslations } from "@/translations";
import { HTMLAttributes } from "react";
import { SupportedLanguage } from "@/translations/types";
import DesktopNavMenu from "./components/DesktopNavMenu";
import MobileNavMenu from "./components/MobileNavMenu";
import Image from "next/image";
import { siteConfig } from "@/config/site";
// import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  lang: SupportedLanguage;
}

const Navbar = ({ lang }: NavbarProps) => {
  // const { isAuthenticated } = useKindeAuth();

  const t = getTranslations(lang);
  const localizedNavItems = getLocalizedNavItems(lang);

  return (
    <nav className="fixed z-10 w-full flex items-center justify-between gap-6 p-4 md:px-10 border-b bg-background/70 backdrop-blur-lg">
      <Button asChild variant={"homeNavLink"}>
        <Link href={`/${lang}`}>
          <Image
            src={"/logo/logo-black-transparent.webp"}
            alt={`${siteConfig.name} logo`}
            width={90}
            height={60}
            priority
          />
        </Link>
      </Button>

      <DesktopNavMenu
        // isAuthenticated={isAuthenticated}
        lang={lang}
        localizedNavItems={localizedNavItems}
        t={t}
      />

      <MobileNavMenu
        // isAuthenticated={isAuthenticated}
        lang={lang}
        localizedNavItems={localizedNavItems}
      />
    </nav>
  );
};
export default Navbar;
