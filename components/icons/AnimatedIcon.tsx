/* eslint-disable @next/next/no-img-element */
// components/AnimatedIcon.tsx
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Opacity =
  | "0"
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80"
  | "90"
  | "100";

interface AnimatedIconProps {
  src: string; // url del archivo (gif/mp4/png)
  size?: number; // tamaño en px (ancho y alto)
  durationMs?: number; // tiempo visible en ms (por defecto 2000)
  className?: string; // clases tailwind extras
  alt?: string;
  opacity?: Opacity;
  finalOpacity?: Opacity;
}

const AnimatedIcon = ({
  src,
  size = 48,
  durationMs = 2000,
  className = "",
  alt = "Animated icon",
  opacity = "100",
  finalOpacity = "0",
}: AnimatedIconProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // ocultar después de durationMs
    const t = setTimeout(() => setVisible(false), durationMs);

    return () => clearTimeout(t);
  }, [durationMs]);

  const getOpacity = (opacity: Opacity) => {
    switch (opacity) {
      case "0":
        return "opacity-0";
        break;
      case "10":
        return "opacity-10";
        break;
      case "20":
        return "opacity-20";
        break;
      case "30":
        return "opacity-30";
        break;
      case "40":
        return "opacity-40";
        break;
      case "50":
        return "opacity-50";
        break;
      case "60":
        return "opacity-60";
        break;
      case "70":
        return "opacity-70";
        break;
      case "80":
        return "opacity-80";
        break;
      case "90":
        return "opacity-90";
        break;
      case "100":
        return "opacity-100";
        break;

      default:
        return "opacity-100";
        break;
    }
  };

  // clases comunes de animación con Tailwind (fade + scale)
  const base =
    `transition-opacity duration-300 ease-out transform ` +
    `rounded-2xl overflow-hidden flex items-center justify-center ` +
    `${className}`;

  // estado visible vs oculto
  const visibleClasses = cn(
    getOpacity(opacity),
    "scale-100 pointer-events-none",
  );
  const hiddenClasses = cn(
    getOpacity(finalOpacity),
    "scale-90 pointer-events-none",
  );

  const wrapperStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div
      aria-hidden={!visible}
      className={`${base} ${visible ? visibleClasses : hiddenClasses}`}
      style={wrapperStyle}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain select-none"
        // para evitar arrastrar la imagen
        draggable={false}
      />
    </div>
  );
};

export default AnimatedIcon;
