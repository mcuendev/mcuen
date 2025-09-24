"use client";

import { useLanguage } from "@/context/language-context";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="hidden">{t.contact.title}</h2>

      <h3>{t.contact.description}</h3>
      <p>{t.contact.email}</p>
      <p>{t.contact.phone}</p>
      <p>{t.contact.formNote}</p>
    </div>
  );
};
export default Contact;
