"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export function ImageDialog({ src, alt }: { src: string; alt?: string }) {
  return (
    <Dialog>
      {/* La imagen es el botón de apertura */}
      <DialogTrigger asChild>
        <button className="focus:outline-none">
          <Image
            src={src}
            alt={alt || "Preview"}
            width={400}
            height={300}
            className="rounded-lg cursor-pointer transition hover:opacity-90"
          />
        </button>
      </DialogTrigger>

      {/* Imagen a pantalla completa */}
      <DialogContent
        className="max-w-none w-screen h-screen border-none shadow-none p-0 bg-transparent flex items-center justify-center"
        showCloseButton={false}
      >
        <DialogTitle className="hidden">{alt}</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center">
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
