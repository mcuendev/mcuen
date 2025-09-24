"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { SupportedLanguage, getTranslations } from "@/translations/intl";

type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: ReturnType<typeof getTranslations>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLang = "ca",
}: {
  children: ReactNode;
  initialLang?: SupportedLanguage;
}) {
  const [language, setLanguage] = useState<SupportedLanguage>(initialLang);
  const t = getTranslations(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
