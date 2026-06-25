import type { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
  className?: string;
};

export function Hero({ children, className = "" }: HeroProps) {
  return (
    <h1
      className={`mt-8 text-[36px] lg:text-[82px] whitespace-pre ${className}`}
    >
      {children}
    </h1>
  );
}
