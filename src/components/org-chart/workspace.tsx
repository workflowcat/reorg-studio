"use client";

import { useMemo, useState } from "react";
import { useStore, childrenOf, totalHeadcount } from "@/lib/store";
import { PHASES } from "@/lib/default-data";
import type { Block, PhaseId } from "@/lib/types";
import { cn, formatRange } from "@/lib/utils";
import {
  Badge,
  Button,
  blockColor,
} from "@/components/ui/primitives";
import { BlockEditor } from "./block-editor";
import { Plus, RotateCcw, Users, X, Eye } from "lucide-react";

export function OrgChartWorkspace() {
  const scenario = useStore((s) => s.scenario);
  const setCurrentPhase = useStore((s) => s.setCurrentPhase);
  const resetScenario = useStore((s) => s.resetScenario);
  const addBlock = useStore((s) => s.addBlock);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const phase = scenario.currentPhase;
  const total = useMemo(
    () => totalHeadcount(scenario.blocks, phase),
    [scenario.blocks, phase],
  );

  const selectedBlock =
    scenario.blocks.find((b) => b.id === selectedId) ?? null;

  const roots = childrenOf(scenario.blocks, undefined);

  function handleAddBlock() {
    const id = `custom-${Date.now()}`;
    addBlock({
      id,
      code: "NEW",
      name: "Новий блок",
      purpose: "Опишіть, чим займається цей блок.",
      color: "zinc",
      parentId: "ceo",
      reportsTo: "CEO",
      headcountByPhase: {
        1: { min: 0, max: 2 },
        2: { min: 1, max: 3 },
        3: { min: 2, max: 5 },
      },
    });
    setSelectedId(id);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      {/* Main canvas */}
      <div className="space-y-4 min-w-0">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2">
          <div className="flex items-center gap-1 pr-2 border-r border-zinc-200">
            {PHASES.map((p) => (
              <button
                key={p.id}
                onClick={() => setCurrentPhase(p.id)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
                  phase === p.id
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100",
                )}
              >
                Фаза {p.id} · {p.shortLabel}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-zinc-600">
            <Users className="h-3.5 w-3.5" />
            <span className="font-medium text-zinc-900 tabular-nums">
              {formatRange(total.min, total.max)}
            </span>
            <span className="text-zinc-400">загальний штат (core blocks)</span>
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <Button size="sm" variant="outline" onClick={handleAddBlock}>
              <Plus className="h-3 w-3" /> Додати блок
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                if (
                  confirm(
                    "Скинути сценарій до дефолтного baseline? Ваші зміни будуть втрачені.",
                  )
                ) {
                  resetScenario();
                  setSelectedId(null);
                }
              }}
            >
              <RotateCcw className="h-3 w-3" /> Скинути
            </Button>
          </div>
        </div>

        {/* Phase banner */}
        <PhaseBanner phase={phase} />

        {/* Tree */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 min-h-[60vh]">
          <div className="space-y-5">
            {roots.map((b) => (
              <BlockTreeNode
                key={b.id}
                block={b}
                allBlocks={scenario.blocks}
                depth={0}
                phase={phase}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Side panel */}
      <aside className="lg:sticky lg:top-20 lg:self-start">
        {selectedBlock ? (
          <BlockEditor
            key={selectedBlock.id}
            block={selectedBlock}
            phase={phase}
            onClose={() => setSelectedId(null)}
            allBlocks={scenario.blocks}
          />
        ) : (
          <EmptySidePanel />
        )}
      </aside>
    </div>
  );
}

function PhaseBanner({ phase }: { phase: PhaseId }) {
  const p = PHASES.find((x) => x.id === phase)!;
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
      <div className="flex items-start gap-3">
        <Badge tone="dark">Фаза {p.id}</Badge>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-900">{p.name}</h3>
            <span className="text-[11px] text-zinc-500 font-mono">
              {p.shortLabel} осіб
            </span>
          </div>
          <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
            {p.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function BlockTreeNode({
  block,
  allBlocks,
  depth,
  phase,
  selectedId,
  onSelect,
}: {
  block: Block;
  allBlocks: Block[];
  depth: number;
  phase: PhaseId;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const children = childrenOf(allBlocks, block.id);
  const range = block.headcountByPhase[phase];
  const colors = blockColor(block.color);
  const isSelected = selectedId === block.id;
  const isHidden = range.min === 0 && range.max === 0;

  return (
    <div className="relative">
      <div
        style={{ marginLeft: depth * 24 }}
        className={cn(
          "relative flex items-stretch gap-3 group",
          isHidden && "opacity-60",
        )}
      >
        {/* Connector */}
        {depth > 0 && (
          <div
            aria-hidden
            className="absolute -left-3 top-0 bottom-0 w-px bg-zinc-200"
          />
        )}

        <button
          onClick={() => onSelect(block.id)}
          className={cn(
            "relative flex-1 text-left rounded-lg border bg-white px-3.5 py-3 transition-all shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-md hover:border-zinc-400",
            isSelected
              ? "border-zinc-900 ring-2 ring-zinc-900/10"
              : "border-zinc-200",
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={cn(
                  "h-7 w-7 rounded-md grid place-items-center shrink-0",
                  colors.bg,
                )}
              >
                <span className={cn("text-[9px] font-bold", colors.text)}>
                  {block.code}
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-900 truncate">
                  {block.name}
                </div>
                <div className="text-[10px] text-zinc-500 truncate">
                  {block.purpose}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {isHidden && (
                <span
                  className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-zinc-400"
                  title="Ще не існує у цій фазі"
                >
                  <Eye className="h-2.5 w-2.5" />
                  пізніше
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold tabular-nums text-zinc-700">
                <Users className="h-2.5 w-2.5" />
                {formatRange(range.min, range.max)}
              </span>
            </div>
          </div>
        </button>
      </div>

      {children.length > 0 && (
        <div className="mt-2 space-y-2">
          {children.map((c) => (
            <BlockTreeNode
              key={c.id}
              block={c}
              allBlocks={allBlocks}
              depth={depth + 1}
              phase={phase}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptySidePanel() {
  return (
    <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center">
      <div className="mx-auto h-10 w-10 rounded-full bg-zinc-100 grid place-items-center mb-3">
        <X className="h-4 w-4 text-zinc-400" />
      </div>
      <p className="text-xs text-zinc-500">
        Виберіть блок зліва, щоб редагувати його назву, purpose і діапазони
        штату для кожної фази росту.
      </p>
    </div>
  );
}
