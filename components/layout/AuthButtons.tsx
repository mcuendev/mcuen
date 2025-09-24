"use client";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

interface AuthButtonsProps {
  isAuthenticated: boolean;
}

const AuthButtons = ({ isAuthenticated }: AuthButtonsProps) => {
  return (
    <div className="flex gap-4 p-10">
      {isAuthenticated ? (
        <>
          <Button asChild variant={"outline"}>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <LogoutLink>Logout</LogoutLink>
          </Button>
        </>
      ) : (
        <Button asChild variant={"outline"}>
          <LoginLink>Login</LoginLink>
        </Button>
      )}
    </div>
  );
};
export default AuthButtons;
