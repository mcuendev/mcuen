import { getTranslations, supportedLanguages } from "@/translations";
import Navbar from "@/components/layout/Navbar/Navbar";
import { notFound } from "next/navigation";
import type React from "react";
import { SupportedLanguage } from "@/translations/types";
import SkipLink from "@/components/layout/SkipLink";

/* =========================
    Interfaces y Tipos
   ========================= */

interface LayoutParams {
  lang: SupportedLanguage;
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}

interface GenerateMetadataProps {
  params: Promise<LayoutParams>;
}

interface MetadataResult {
  htmlLang: string;
}

/* =========================
    generateMetadata
   ========================= */

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<MetadataResult> {
  const { lang } = await params;
  return {
    htmlLang: lang,
  };
}

/* =========================
    Layout Component
   ========================= */

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);

  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  return (
    <>
      <SkipLink>{t.ui.buttons.skipLink}</SkipLink>
      <Navbar lang={lang} />
      <main
        id="main"
        className="flex-1 pt-21 pb-10 container mx-auto p-4 md:px-10"
      >
        {children}
      </main>
    </>
  );
};

export default LocaleLayout;
