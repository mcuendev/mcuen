"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowLeft } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <nav className="fixed w-full flex items-center justify-between gap-6 p-4 md:px-10 border-b bg-background/70 backdrop-blur-lg">
      <Button
        className="text-foreground hover:text-foreground"
        asChild
        variant={"ghost"}
      >
        <Link href={`/ca/artworks`}>
          <ArrowLeft className="w-4 h-4" />
          Torna a Monica Cuén
        </Link>
      </Button>

      <div className="flex items-center gap-4">
        <Button asChild>
          <LogoutLink>Logout</LogoutLink>
        </Button>
      </div>
    </nav>
  );
}
