import { ScenariosWorkspace } from "@/components/scenarios/workspace";
import { Hydrated } from "@/components/hydrated";

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
          Сценарії та шеринг
        </h1>
        <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
          Переназвіть поточний сценарій, експортуйте його як JSON, щоб
          поділитися з командою, імпортуйте назад відредаговану версію або
          скиньте до baseline. Усе в цьому інструменті живе у вашому
          браузері — сервера немає.
        </p>
      </div>
      <Hydrated
        fallback={
          <div className="h-[40vh] rounded-xl border border-dashed border-zinc-300 grid place-items-center text-xs text-zinc-400">
            Завантаження сценарію…
          </div>
        }
      >
        <ScenariosWorkspace />
      </Hydrated>
    </div>
  );
}
