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
import { usePathname, useRouter } from "next/navigation";
import { SupportedLanguage } from "@/translations/types";

interface Props {
  currentLang: SupportedLanguage;
  type?: "button" | "icon";
}

const LanguageSelector = ({ currentLang, type = "icon" }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = getTranslations(currentLang);

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
  };

  return (
    <DropdownMenu>
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
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className="flex items-center gap-2"
          >
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
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
