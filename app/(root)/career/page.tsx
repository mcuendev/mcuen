"use client";

import { useLanguage } from "@/context/language-context";

const Career = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="hidden">{t.career.title}</h2>

      <section>
        <h3>{t.career.education.title}</h3>
        <ul>
          {t.career.education.items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t.career.exhibitions.title}</h3>
        <ul>
          {t.career.exhibitions.items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Career;
