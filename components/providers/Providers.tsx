"use client";

import { ReactNode } from "react";
import ConvexClientProvider from "./ConvexClientProvider";
import { LanguageProvider } from "@/context/language-context";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ConvexClientProvider>
  );
}
