export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation — consumed by header, mobile menu, and footer. */
export const mainNav: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Drones", href: "/drones" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
];
