import { RuleSet } from "styled-components";

export const BREAKPOINTS = {
  xxs: 0,
  xs: 600, // tablet
  sm: 768, // tablet
  md: 1024, // desktop
  lg: 1184, // desktop
  xl: 1440, // desktop
} as const;

export type BreakPointsKey = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

export const mediaBreakpointUp = (
  key: BreakPointsKey,
  body: RuleSet<object>
) => {
  return `
   @media (min-width: ${BREAKPOINTS[key]}px) {
     ${body}
    }
  `;
};

export const desktop = (body: RuleSet<object>) => mediaBreakpointUp("md", body);
export const desktopLg = (body: RuleSet<object>) =>
  mediaBreakpointUp("lg", body);
export const tablet = (body: RuleSet<object>) => mediaBreakpointUp("xs", body);
