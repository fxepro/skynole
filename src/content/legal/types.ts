export type TextSegment =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

export type LegalBlock =
  | { kind: "paragraph"; segments: TextSegment[] }
  | { kind: "list"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  eyebrow?: string;
  version?: string;
  intro?: TextSegment[];
  sections: LegalSection[];
};
