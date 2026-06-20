import { Container } from "@/components/ui/Container";

export type Stat = {
  value: string;
  label: string;
};

/** Headline metrics band (e.g. 3 / 10+ / 2.7M+). */
export function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-ink-200 bg-white">
      <Container className="grid gap-8 py-12 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-4xl font-bold text-brand-600 sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wide text-ink-500">
              {stat.label}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
