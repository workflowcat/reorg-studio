import { ScenariosWorkspace } from "@/components/scenarios/workspace";
import { Hydrated } from "@/components/hydrated";

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
          Scenarios & sharing
        </h1>
        <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
          Rename the current scenario, export it as JSON to share with
          teammates, import an edited version back, or reset to the
          baseline. Everything in this tool lives in your browser — there
          is no server.
        </p>
      </div>
      <Hydrated
        fallback={
          <div className="h-[40vh] rounded-xl border border-dashed border-zinc-300 grid place-items-center text-xs text-zinc-400">
            Loading scenario…
          </div>
        }
      >
        <ScenariosWorkspace />
      </Hydrated>
    </div>
  );
}
