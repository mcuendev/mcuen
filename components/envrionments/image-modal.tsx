"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function ImageDialog({ src, alt }: { src: string; alt?: string }) {
  return (
    <Dialog>
      {/* Miniatura */}
      <DialogTrigger asChild>
        <button className="focus:outline-none h-full w-full flex items-center justify-center">
          <Image
            src={src}
            alt={alt || "Preview"}
            width={400}
            height={300}
            priority
            className="rounded-lg cursor-pointer transition hover:opacity-90 h-full w-full object-contain"
          />
        </button>
      </DialogTrigger>

      {/* Diálogo de imagen completa */}
      <DialogContent
        className={cn(
          "h-full max-h-[95vh] max-w-[95vw]",
          "bg-transparent border-none shadow-none pointer-events-none",
        )}
        showCloseButton={false}
      >
        <DialogTitle className="hidden">{alt}</DialogTitle>
        <DialogClose asChild>
          <Button
            className="absolute right-0 top-0 z-50"
            variant={"secondary"}
            size={"icon"}
          >
            <X />
          </Button>
        </DialogClose>

        {/* Contenedor de imagen con tamaño visible */}
        <div className="w-full h-full">
          <Image
            src={src}
            alt={alt || "Full view"}
            fill
            className="object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
