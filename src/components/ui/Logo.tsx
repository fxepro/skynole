import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/config/site";

/** Brand wordmark + mark. Used in header and footer. */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight",
        tone === "light" ? "text-white" : "text-ink-900",
        className,
      )}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 0V5m0 14v-3.5m3.5-3.5H19M5 12h3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="5" cy="5" r="1.6" fill="currentColor" />
          <circle cx="19" cy="5" r="1.6" fill="currentColor" />
          <circle cx="5" cy="19" r="1.6" fill="currentColor" />
          <circle cx="19" cy="19" r="1.6" fill="currentColor" />
        </svg>
      </span>
      {site.name}
    </Link>
  );
}
