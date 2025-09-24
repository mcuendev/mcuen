"use client";

import { useLanguage } from "@/context/language-context";

const Reviews = () => {
  const { t } = useLanguage();
  return (
    <div>
      <h2 className="hidden">{t.reviews.title}</h2>

      <ul className="flex flex-col space-y-4">
        {t.reviews.quotes.map((quote) => (
          <li key={quote.author}>
            <q className="italic text-lg">{quote.text}</q>
            <p className="font-medium">{quote.author}</p>
            <small className="italic">{quote.source}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
