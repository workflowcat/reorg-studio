import { OrgChartWorkspace } from "@/components/org-chart/workspace";
import { Hydrated } from "@/components/hydrated";

export default function OrgChartPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
              Org chart builder
            </h1>
            <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
              Блоки і суб-команди для поточного сценарію. Виберіть фазу, щоб
              побачити штат для цього етапу. Клікніть на блок, щоб
              редагувати його purpose, діапазон штату та reporting line.
            </p>
          </div>
        </div>
      </div>
      <Hydrated
        fallback={
          <div className="h-[60vh] rounded-xl border border-dashed border-zinc-300 grid place-items-center text-xs text-zinc-400">
            Завантаження сценарію з вашого браузера…
          </div>
        }
      >
        <OrgChartWorkspace />
      </Hydrated>
    </div>
  );
}
