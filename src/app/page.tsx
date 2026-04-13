import Link from "next/link";
import {
  Network,
  Grid3x3,
  Layers,
  ShieldCheck,
  ArrowRight,
  Users,
  Building2,
} from "lucide-react";
import { Card, CardBody, CardHeader, CardTitle, Badge } from "@/components/ui/primitives";
import { PHASES } from "@/lib/default-data";
import { OVERVIEW, type CompanyProfile } from "@/content/overview";

function ProfileCard({ profile: p }: { profile: CompanyProfile }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-zinc-100">
        <div className="text-sm font-semibold text-zinc-900">{p.name}</div>
        <div className="text-[11px] text-zinc-500 mt-0.5">{p.tagline}</div>
      </div>
      <div className="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] border-b border-zinc-100">
        <div><span className="text-zinc-400">Founded</span> <span className="text-zinc-700 ml-1">{p.founded}</span></div>
        <div><span className="text-zinc-400">Headcount</span> <span className="text-zinc-700 ml-1">{p.headcount}</span></div>
        <div><span className="text-zinc-400">Eng</span> <span className="text-zinc-700 ml-1">{p.engRatio}</span></div>
        <div><span className="text-zinc-400">HQ</span> <span className="text-zinc-700 ml-1">{p.hq}</span></div>
        {p.production && (
          <div className="col-span-2"><span className="text-zinc-400">Production</span> <span className="text-zinc-700 ml-1">{p.production}</span></div>
        )}
        <div className="col-span-2"><span className="text-zinc-400">Founders</span> <span className="text-zinc-700 ml-1">{p.founders}</span></div>
      </div>
      <div className="px-4 py-3 space-y-2 text-[11px] text-zinc-600 leading-relaxed">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mb-0.5">Key move</div>
          {p.keyMove}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mb-0.5">What to copy</div>
          {p.whatToCopy}
        </div>
      </div>
      {p.sources.length > 0 && (
        <div className="px-4 py-2 border-t border-zinc-100 bg-zinc-50/50">
          <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
            {p.sources.map((s, i) => (
              <li key={i}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-zinc-400 hover:text-zinc-700 underline decoration-dotted">
                    {s.label}
                  </a>
                ) : (
                  <span className="text-[10px] text-zinc-400">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative px-8 py-12 md:py-16 md:px-12 max-w-3xl">
          <Badge tone="outline" className="mb-4 text-zinc-500">
            Internal planning tool · v0.1
          </Badge>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
            Design the org before you hire the org.
          </h1>
          <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed max-w-xl">
            A planning canvas for small defense-hardware R&amp;D teams
            scaling from 20 to 50 to 100+ people. Model the structure, lay
            out growth phases, and stress-test who owns what — before the
            reorg conversation starts.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Link
              href="/org-chart"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800"
            >
              <Network className="h-3.5 w-3.5" />
              Open the org chart
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/raci"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              <Grid3x3 className="h-3.5 w-3.5" />
              Open the RACI matrix
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 border-t border-zinc-200">
          {[
            { label: "Founding team size", value: "20", icon: Users },
            { label: "Growth target", value: "100+", icon: Building2 },
            { label: "Functional blocks", value: "6", icon: Layers },
            { label: "Independent QA", value: "Always", icon: ShieldCheck },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="px-6 py-5 border-r border-zinc-200 last:border-r-0 bg-white/80"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-zinc-500">
                <Icon className="h-3 w-3" />
                {label}
              </div>
              <div className="mt-1 text-2xl font-semibold text-zinc-900 tabular-nums">
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phase roadmap summary */}
      <section>
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Growth phases
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Three staging points where the org structure has to change
              materially — not for headcount&apos;s sake, but because things
              break at each boundary.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {PHASES.map((phase) => (
            <Card key={phase.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge tone="dark">Phase {phase.id}</Badge>
                  <span className="text-xs font-mono text-zinc-500">
                    {phase.shortLabel} people
                  </span>
                </div>
                <CardTitle className="mt-2">{phase.name}</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="text-xs leading-relaxed text-zinc-600">
                  {phase.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Research topic sections */}
      {OVERVIEW.map((section) => (
        <section key={section.id} id={section.id}>
          <div className="flex items-end justify-between mb-5">
            <div>
              <Badge tone="outline" className="mb-2">
                {section.eyebrow}
              </Badge>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
                {section.title}
              </h2>
              <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
                {section.summary}
              </p>
            </div>
          </div>

          {/* Company profiles — comparison table + cards */}
          {section.profiles && section.profiles.length > 0 && (
            <>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white mb-4 scrollbar-thin">
                <table className="w-full min-w-[800px] border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200">
                      <th className="text-left px-3 py-2 font-semibold text-zinc-900">Company</th>
                      <th className="text-left px-3 py-2 font-medium text-zinc-500">Year</th>
                      <th className="text-left px-3 py-2 font-medium text-zinc-500">HC</th>
                      <th className="text-left px-3 py-2 font-medium text-zinc-500">Eng %</th>
                      <th className="text-left px-3 py-2 font-medium text-zinc-500">Key move</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.profiles.map((p) => (
                      <tr key={p.name} className="border-b border-zinc-100 hover:bg-zinc-50/60">
                        <td className="px-3 py-2 font-semibold text-zinc-900">{p.name}</td>
                        <td className="px-3 py-2 text-zinc-600 tabular-nums">{p.founded}</td>
                        <td className="px-3 py-2 text-zinc-600">{p.headcount}</td>
                        <td className="px-3 py-2 text-zinc-600">{p.engRatio}</td>
                        <td className="px-3 py-2 text-zinc-600">{p.tagline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mb-6">
                {section.profiles.map((p) => (
                  <ProfileCard key={p.name} profile={p} />
                ))}
              </div>
            </>
          )}

          {/* Regular content cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {section.cards.map((c) => (
              <Card key={c.title}>
                <CardHeader>
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardBody className="space-y-2 text-xs leading-relaxed text-zinc-600">
                  {c.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {c.bullets && c.bullets.length > 0 ? (
                    <ul className="list-disc list-outside space-y-1 pl-4 text-zinc-600">
                      {c.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {c.sources && c.sources.length > 0 ? (
                    <div className="pt-2 border-t border-zinc-100 mt-3">
                      <div className="text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                        Sources
                      </div>
                      <ul className="space-y-0.5">
                        {c.sources.map((s, i) => (
                          <li key={i}>
                            {s.url ? (
                              <a
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-zinc-500 hover:text-zinc-800 underline decoration-dotted"
                              >
                                {s.label}
                              </a>
                            ) : (
                              <span className="text-[10px] text-zinc-500">
                                {s.label}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ── */}
      <section className="rounded-2xl border border-zinc-900 bg-zinc-900 text-white px-8 py-10 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-lg">
            <h3 className="text-lg font-semibold tracking-tight">
              Ready to draw the org?
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Everything on this page is editable. Adjust blocks, move
              people around, rewrite the RACI to fit your operating model.
              Your changes stay in the browser — nothing leaves the device.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/org-chart"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-zinc-900 hover:bg-zinc-100"
            >
              <Network className="h-3.5 w-3.5" /> Org chart
            </Link>
            <Link
              href="/raci"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800"
            >
              <Grid3x3 className="h-3.5 w-3.5" /> RACI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
