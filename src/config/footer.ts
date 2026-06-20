import type { NavItem } from "./navigation";

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

/** Footer columns — links must match config/navigation where they overlap. */
export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Drones", href: "/drones" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
    ],
  },
];
