import React from "react";
import { cn } from "@/lib/utils";
import { HTMLAttributes, BlockquoteHTMLAttributes } from "react";

/*
  Typography components collection
  - Based on shadcn/ui typography examples
  - Each component accepts standard HTML attributes for its element
  - I kept your styles intact and only added bottom margins where it helps spacing
*/

/* ===================== H1 - H4 ===================== */
export type H1TypoProps = HTMLAttributes<HTMLHeadingElement>;
export const H1Typo = ({ className, children, ...props }: H1TypoProps) => (
  <h1
    className={cn(
      "font-serif mt-8 mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

export type H2TypoProps = HTMLAttributes<HTMLHeadingElement>;
export const H2Typo = ({ className, children, ...props }: H2TypoProps) => (
  <h2
    className={cn(
      "font-serif mt-8 mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

export type H3TypoProps = HTMLAttributes<HTMLHeadingElement>;
export const H3Typo = ({ className, children, ...props }: H3TypoProps) => (
  <h3
    className={cn(
      "font-serif mt-8 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

export type H4TypoProps = HTMLAttributes<HTMLHeadingElement>;
export const H4Typo = ({ className, children, ...props }: H4TypoProps) => (
  <h4
    className={cn(
      "font-serif mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

/* ===================== Paragraph & Lead ===================== */
export type PTypoProps = HTMLAttributes<HTMLParagraphElement>;
export const PTypo = ({ className, children, ...props }: PTypoProps) => (
  <p className={cn("mb-6 leading-7", className)} {...props}>
    {children}
  </p>
);

export type LeadTypoProps = HTMLAttributes<HTMLParagraphElement>;
export const LeadTypo = ({ className, children, ...props }: LeadTypoProps) => (
  <p className={cn("mb-6 text-muted-foreground text-xl", className)} {...props}>
    {children}
  </p>
);

/* ===================== Blockquote ===================== */
export interface BlockQuoteTypoProps
  extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  author?: string;
  source?: string;
}

export const BlockQuoteTypo = ({
  className,
  children,
  author,
  source,
  ...props
}: BlockQuoteTypoProps) => {
  return (
    <blockquote
      className={cn(
        "mt-8 mb-6 bg-secondary p-4 rounded-sm max-w-2xl",
        className,
      )}
      {...props}
    >
      <p className="border-l-2 pl-6 text-sm sm:text-base lg:text-lg font-serif italic leading-relaxed">
        “{children}”
      </p>

      {(author || source) && (
        <footer className="mt-4 text-right">
          {author && (
            <cite className="block text-base font-semibold not-italic">
              — {author}
            </cite>
          )}

          {source && <span className="block text-sm">{source}</span>}
        </footer>
      )}
    </blockquote>
  );
};

/* ===================== List ===================== */
export type ListTypoProps = HTMLAttributes<HTMLUListElement>;
export const ListTypo = ({ className, children, ...props }: ListTypoProps) => (
  <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
    {children}
  </ul>
);

/* ===================== Table ===================== */
export interface TableColumn<T> {
  key: keyof T;
  header: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps<T> extends HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[];
  data: T[];
}

export const Table = <T extends Record<string, unknown>>({
  className,
  columns,
  data,
  ...props
}: TableProps<T>) => (
  <div className={cn("my-6 w-full overflow-y-auto", className)} {...props}>
    <table className="w-full">
      <thead>
        <tr className="even:bg-muted m-0 border-t p-0">
          {columns.map((col) => (
            <th
              key={String(col.key)}
              align={col.align}
              className={cn(
                "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                col.className,
              )}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="even:bg-muted m-0 border-t p-0">
            {columns.map((col) => (
              <td
                key={String(col.key)}
                align={col.align}
                className={cn(
                  "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  col.className,
                )}
              >
                {row[col.key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ===================== Inline code / Large / Small / Muted ===================== */
export type InlineCodeProps = HTMLAttributes<HTMLElement>;
export const InlineCode = ({
  className,
  children,
  ...props
}: InlineCodeProps) => (
  <code
    className={cn(
      "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      className,
    )}
    {...props}
  >
    {children}
  </code>
);

export type LargeTypoProps = HTMLAttributes<HTMLDivElement>;
export const LargeTypo = ({
  className,
  children,
  ...props
}: LargeTypoProps) => (
  <div className={cn("mb-4 text-lg font-semibold", className)} {...props}>
    {children}
  </div>
);

export type SmallTypoProps = HTMLAttributes<HTMLElement>;
export const SmallTypo = ({
  className,
  children,
  ...props
}: SmallTypoProps) => (
  <small
    className={cn("text-sm leading-none font-medium", className)}
    {...props}
  >
    {children}
  </small>
);

export type MutedTypoProps = HTMLAttributes<HTMLParagraphElement>;
export const MutedTypo = ({
  className,
  children,
  ...props
}: MutedTypoProps) => (
  <p className={cn("mb-4 text-muted-foreground text-sm", className)} {...props}>
    {children}
  </p>
);
