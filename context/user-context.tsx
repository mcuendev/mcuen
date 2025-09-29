// app/private/user-context.tsx
"use client";

import React, { createContext, useContext, ReactNode } from "react";

export type PublicUser = {
  username?: string | null | undefined;
  email?: string | null;
  given_name?: string | null;
  family_name?: string | null;
  full_name?: string | null;
  picture?: string | null;
};

const UserContext = createContext<PublicUser | null>(null);

export function UserProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: PublicUser | null;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
