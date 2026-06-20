import type { SVGProps } from "react";

export type IconName =
  | "eye"
  | "camera"
  | "leaf"
  | "lifebuoy"
  | "broadcast"
  | "tower"
  | "arrow";

const paths: Record<IconName, React.ReactNode> = {
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4S8 4 6 12c-1.5 6 2 8 2 8s2-9 12-12" />
      <path d="M8 20c0-4 2-7 6-9" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m5 5 4.5 4.5M14.5 14.5 19 19M19 5l-4.5 4.5M9.5 14.5 5 19" />
    </>
  ),
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M6 6a8.5 8.5 0 0 0 0 12M18 6a8.5 8.5 0 0 1 0 12" />
    </>
  ),
  tower: (
    <>
      <path d="M12 3v18M7 21l5-14 5 14M5.5 7h13M8 13h8" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

/** Central icon registry — components reference by name, never inline new SVGs. */
export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
