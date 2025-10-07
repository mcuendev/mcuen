import { Button } from "@/components/ui/button";
import {
  Item,
  ItemGroup,
  ItemHeader,
  ItemSeparator,
} from "@/components/ui/item";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import LanguageSelector from "./LanguageSelector";
import { getTranslations } from "@/translations";
import { SupportedLanguage } from "@/translations/types";
import { NavItemWithHref } from "@/config/nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MobileNavMenuProps {
  lang: SupportedLanguage;
  localizedNavItems: NavItemWithHref[];
  isAuthenticated?: boolean | null;
}

const MobileNavMenu = ({
  lang,
  localizedNavItems,
  isAuthenticated,
}: MobileNavMenuProps) => {
  const pathname = usePathname();
  const t = getTranslations(lang);

  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Button asChild variant={"homeNavLink"} className="p-0">
                <Link href={`/${lang}`}>
                  <Image
                    src={"/logo/logo-black-transparent.webp"}
                    alt="TODO"
                    width={90}
                    height={60}
                    priority
                  />
                </Link>
              </Button>
            </SheetTitle>
            <SheetDescription className="text-pretty">
              {t.ui.navigation.menu.description}
            </SheetDescription>
          </SheetHeader>

          {/* Mobile NavLinks */}
          <ItemGroup>
            {localizedNavItems.map((item) => {
              // Skip if it's an admin route and user is not authenticated
              // or if it's a protected route and user is authenticated
              if (
                (!isAuthenticated && item.showAdmin) ||
                (isAuthenticated && item.showAdmin === false)
              ) {
                return null;
              }

              const isActive =
                item.href === `/${lang}`
                  ? pathname === `/${lang}`
                  : pathname.includes(item.href);

              return (
                <Fragment
                  key={item.type === "translated" ? item.titleKey : item.title}
                >
                  <Item>
                    <ItemHeader>
                      <Button
                        className={cn(
                          "font-serif",
                          isActive
                            ? "text-primary font-bold"
                            : "text-foreground font-light",
                        )}
                        variant="link"
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
                    </ItemHeader>
                  </Item>
                  <ItemSeparator />
                </Fragment>
              );
            })}
          </ItemGroup>

          <SheetFooter>
            <LanguageSelector currentLang={lang} type="button" />

            {/* Auth Buttons */}
            {/* {isAuthenticated ? (
                <Button asChild>
                  <LogoutLink>Logout</LogoutLink>
                </Button>
              ) : (
                <Button asChild>
                  <LoginLink>Login</LoginLink>
                </Button>
              )} */}

            <SheetClose asChild>
              <Button variant={"outline"}>{t.ui.buttons.close}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNavMenu;
