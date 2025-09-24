"use client";

import { useLanguage } from "@/context/language-context";

const Page = () => {
  const { t } = useLanguage();
  return (
    <div>
      <h2 className="hidden">{t.welcome.title}</h2>

      <h3>{t.welcome.subtitle}</h3>
      <p>{t.welcome.description}</p>
    </div>
  );
};

export default Page;
