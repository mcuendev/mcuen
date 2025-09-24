"use client";

import { useLanguage } from "@/context/language-context";

const Environments = () => {
  const { t } = useLanguage();
  return (
    <div>
      <h2 className="hidden">{t.environments.title}</h2>

      <h3>{t.environments.subtitle}</h3>
      <p>{t.environments.description}</p>
    </div>
  );
};
export default Environments;
