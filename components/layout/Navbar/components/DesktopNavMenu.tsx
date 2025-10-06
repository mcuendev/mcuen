import { Button } from "@/components/ui/button";
import { NavItemWithHref } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { AppTranslation, SupportedLanguage } from "@/translations/types";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DesktopNavMenuProps {
  localizedNavItems: NavItemWithHref[];
  isAuthenticated?: boolean | null;
  lang: SupportedLanguage;
  t: AppTranslation;
}

const DesktopNavMenu = ({
  localizedNavItems,
  isAuthenticated,
  lang,
  t,
}: DesktopNavMenuProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex gap-4">
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
          <Button
            key={item.type === "translated" ? item.titleKey : item.title}
            className={cn(
              "font-serif",
              isActive
                ? "text-primary font-bold"
                : "text-foreground font-medium",
            )}
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
              {item.type === "translated" ? t[item.titleKey].title : item.title}
            </Link>
          </Button>
        );
      })}

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

      {/* Lang Selector */}
      <LanguageSelector currentLang={lang} />
    </div>
  );
};
export default DesktopNavMenu;
