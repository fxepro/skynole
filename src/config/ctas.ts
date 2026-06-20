import type { NavItem } from "./navigation";

/** Site-wide CTA presets — pages reference these rather than inlining labels. */
export const primaryCta: NavItem = { label: "Contact us", href: "/contact" };
export const secondaryCta: NavItem = {
  label: "Explore solutions",
  href: "/solutions",
};
export const callbackCta: NavItem = {
  label: "Request a call back",
  href: "/contact",
};
