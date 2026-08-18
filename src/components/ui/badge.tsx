import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border-2 border-list-border bg-list-bg px-4 py-2.5 text-sm font-semibold text-list-font transition-colors duration-150",
  {
    variants: {
      variant: {
        default: "bg-accent-warm hover:bg-accent-warm/90",
        secondary: "border-list-border bg-accent-secondary text-list-font",
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
