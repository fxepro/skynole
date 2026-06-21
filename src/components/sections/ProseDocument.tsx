import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type {
  LegalBlock,
  LegalDocument,
  TextSegment,
} from "@/content/legal/types";

function Segments({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, i) =>
        segment.type === "link" ? (
          <Link
            key={i}
            href={segment.href}
            className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
          >
            {segment.value}
          </Link>
        ) : (
          <span key={i}>{segment.value}</span>
        ),
      )}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "list") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-600">
        {block.items.map((item) => (
          <li key={item} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-4 leading-relaxed text-ink-600">
      <Segments segments={block.segments} />
    </p>
  );
}

/** Long-form legal and utility prose — structured copy from content layer. */
export function ProseDocument({ document }: { document: LegalDocument }) {
  const { intro, sections, version } = document;

  return (
    <section className="section">
      <Container>
        <article className="mx-auto max-w-3xl">
          {version && (
            <p className="text-sm font-medium text-ink-500">{version}</p>
          )}
          {intro && (
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              <Segments segments={intro} />
            </p>
          )}
          {sections.map((section, index) => (
            <div
              key={section.heading}
              className={
                index === 0
                  ? "mt-12"
                  : "mt-12 border-t border-ink-200 pt-12"
              }
            >
              <h2 className="text-2xl">{section.heading}</h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          ))}
        </article>
      </Container>
    </section>
  );
}
