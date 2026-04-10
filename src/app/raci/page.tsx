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
            Хто{" "}
            <span className="font-semibold text-zinc-700">Responsible</span>,{" "}
            <span className="font-semibold text-zinc-700">Accountable</span>,{" "}
            <span className="font-semibold text-zinc-700">Consulted</span> чи{" "}
            <span className="font-semibold text-zinc-700">Informed</span> по
            кожній крос-функціональній активності. Дефолти засіяні з цільової
            operating model — редагуйте під свою компанію.
          </p>
        </div>
      </div>
      <Hydrated
        fallback={
          <div className="h-[60vh] rounded-xl border border-dashed border-zinc-300 grid place-items-center text-xs text-zinc-400">
            Завантаження сценарію з вашого браузера…
          </div>
        }
      >
        <RaciWorkspace />
      </Hydrated>
    </div>
  );
}
