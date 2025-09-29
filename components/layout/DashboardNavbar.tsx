"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { siteConfig } from "@/config/site";

export default function DashboardNavbar() {
  return (
    <nav className="fixed w-full flex items-center justify-between gap-6 p-4 md:px-10 border-b bg-white/60 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <h1>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold inline-block">{siteConfig.name}</span>
          </Link>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Button asChild>
          <LogoutLink>Logout</LogoutLink>
        </Button>
      </div>
    </nav>
  );
}
