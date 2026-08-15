import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroProps = {
  children: ReactNode;
  className?: string;
};

export function Hero({ children, className }: HeroProps) {
  return (
    <h1
      className={cn(
        "mt-8 whitespace-pre text-[38px] font-semibold tracking-[-0.02em] lg:text-[72px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
