import { RaciWorkspace } from "@/components/raci/workspace";
import { Hydrated } from "@/components/hydrated";

export default function RaciPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
            RACI matrix
          </h1>
          <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
            Who is{" "}
            <span className="font-semibold text-zinc-700">Responsible</span>,{" "}
            <span className="font-semibold text-zinc-700">Accountable</span>,{" "}
            <span className="font-semibold text-zinc-700">Consulted</span>, or{" "}
            <span className="font-semibold text-zinc-700">Informed</span> for
            each cross-functional activity. Defaults are seeded from the
            target operating model — edit to fit your company.
          </p>
        </div>
      </div>
      <Hydrated
        fallback={
          <div className="h-[60vh] rounded-xl border border-dashed border-zinc-300 grid place-items-center text-xs text-zinc-400">
            Loading scenario from your browser…
          </div>
        }
      >
        <RaciWorkspace />
      </Hydrated>
    </div>
  );
}
