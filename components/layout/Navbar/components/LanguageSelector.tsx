import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  supportedLanguages,
  languageNames,
  getTranslations,
} from "@/translations";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SupportedLanguage } from "@/translations/types";
import Link from "next/link";

interface Props {
  currentLang: SupportedLanguage;
  type?: "button" | "icon";
}

const LanguageSelector = ({ currentLang, type = "icon" }: Props) => {
  const pathname = usePathname();
  const t = getTranslations(currentLang);

  const getLocalizedHref = (newLang: SupportedLanguage) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  return (
    // SET TO MODAL FALSE DUE TO ISSUE WITH RADIX & SHADCN LIBS => SEE REFERENCE ON BOTTOM OF THE PAGE
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={type === "icon" ? "secondary" : "default"}
          size={type === "icon" ? "icon" : "default"}
        >
          {type === "icon" ? (
            <Languages className="w-4 h-4" />
          ) : (
            t.ui.buttons.language
          )}
        </Button>
        {/* <Button variant="secondary" size="icon">
          <Image
            src={`/icons/flags/${currentLang}.svg`}
            alt={`${languageNames[currentLang]} flag`}
            width={24}
            height={24}
            className="rounded-full"
          />
        </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            asChild
            key={lang}
            className="flex items-center gap-2"
          >
            <Link href={getLocalizedHref(lang)}>
              <Image
                src={`/icons/flags/${lang}.svg`}
                alt={`${languageNames[lang]} flag`}
                width={16}
                height={16}
                className="rounded-full"
              />
              <span className={currentLang === lang ? "font-bold" : ""}>
                {languageNames[lang]}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

// Reference to issue: https://github.com/shadcn-ui/ui/issues/1859#issuecomment-2423190031
