"use client";

import { ReactNode } from "react";
import ConvexClientProvider from "./ConvexClientProvider";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <KindeProvider>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </KindeProvider>
  );
}
