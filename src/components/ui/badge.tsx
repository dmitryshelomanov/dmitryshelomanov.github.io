import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-xl border-2 border-list-border bg-list-bg px-3 py-3 text-sm font-medium text-list-font transition-all duration-150",
  {
    variants: {
      variant: {
        default:
          "hover:border-accent hover:bg-list-bg-strong hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5",
        secondary: "border-list-border bg-list-bg-strong text-list-font",
        outline: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
