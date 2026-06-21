"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/config/navigation";
import { primaryCta } from "@/config/ctas";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Sticky marketing header: logo, primary nav, CTA, and mobile drawer. */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/80 backdrop-blur">
      <Container className="flex h-[4.25rem] items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors",
                isActive(pathname, item.href)
                  ? "text-brand-600"
                  : "text-ink-600 hover:text-ink-900",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {open ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-lg font-medium",
                  isActive(pathname, item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-700 hover:bg-ink-100",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={primaryCta.href}
              className="mt-3 w-full"
            >
              {primaryCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
