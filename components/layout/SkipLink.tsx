import Link from "next/link";
import { Button } from "../ui/button";
import { AnchorHTMLAttributes } from "react";

type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const SkipLink = ({ children, href = "#main", ...props }: SkipLinkProps) => {
  return (
    <div className="fixed top-20 flex z-20">
      <Button
        asChild
        className="-translate-x-full focus:px-4 focus:py-2 focus:translate-x-0 transition-transform rounded-l-none bg-primary/80"
      >
        <Link
          className="sr-only focus:not-sr-only bg-primary text-primary-foreground"
          href={href}
          {...props}
        >
          {children}
        </Link>
      </Button>
    </div>
  );
};
export default SkipLink;
