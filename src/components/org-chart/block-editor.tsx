"use client";

import { useStore } from "@/lib/store";
import type { Block, PhaseId } from "@/lib/types";
import { PHASES } from "@/lib/default-data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  Label,
  Textarea,
  Button,
  Badge,
  blockColor,
  BLOCK_COLORS,
} from "@/components/ui/primitives";
import { cn, formatRange } from "@/lib/utils";
import { X, Trash2, Users } from "lucide-react";

const COLOR_OPTIONS = Object.keys(BLOCK_COLORS);

export function BlockEditor({
  block,
  phase,
  onClose,
  allBlocks,
}: {
  block: Block;
  phase: PhaseId;
  onClose: () => void;
  allBlocks: Block[];
}) {
  const updateBlock = useStore((s) => s.updateBlock);
  const updateHeadcount = useStore((s) => s.updateBlockHeadcount);
  const removeBlock = useStore((s) => s.removeBlock);
  const reparent = useStore((s) => s.reparentBlock);

  const possibleParents = allBlocks.filter(
    (b) => b.id !== block.id && !isDescendantOf(b, block.id, allBlocks),
  );

  const colors = blockColor(block.color);

  return (
    <Card className="overflow-hidden">
      <div className={cn("h-1 w-full", colors.bg)} />
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge tone="dark">{block.code}</Badge>
            <CardTitle>{block.name}</CardTitle>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700 rounded-md p-1 -mr-1"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Назва</Label>
          <Input
            id="name"
            value={block.name}
            onChange={(e) => updateBlock(block.id, { name: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1.5">
            <Label htmlFor="code">Код</Label>
            <Input
              id="code"
              value={block.code}
              onChange={(e) => updateBlock(block.id, { code: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="reportsTo">Reports to</Label>
            <Input
              id="reportsTo"
              value={block.reportsTo ?? ""}
              placeholder="напр. CEO"
              onChange={(e) =>
                updateBlock(block.id, { reportsTo: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="purpose">Purpose</Label>
          <Textarea
            id="purpose"
            value={block.purpose}
            onChange={(e) => updateBlock(block.id, { purpose: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <Label>Колір</Label>
          <div className="flex flex-wrap gap-1.5">
            {COLOR_OPTIONS.map((c) => {
              const cc = blockColor(c);
              return (
                <button
                  key={c}
                  onClick={() => updateBlock(block.id, { color: c })}
                  className={cn(
                    "h-6 w-6 rounded-md border-2 transition-all",
                    cc.bg,
                    block.color === c
                      ? "border-zinc-900 ring-2 ring-zinc-900/20"
                      : "border-transparent",
                  )}
                  aria-label={`Color ${c}`}
                />
              );
            })}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="parent">Батьківський блок</Label>
          <select
            id="parent"
            value={block.parentId ?? ""}
            onChange={(e) =>
              reparent(block.id, e.target.value || undefined)
            }
            className="h-9 w-full rounded-md border border-zinc-300 bg-white px-3 text-xs text-zinc-800"
          >
            <option value="">— Top level —</option>
            {possibleParents.map((p) => (
              <option key={p.id} value={p.id}>
                {p.code} · {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5 text-zinc-500" />
            <Label>Штат по фазах</Label>
          </div>
          <div className="space-y-2">
            {PHASES.map((p) => {
              const r = block.headcountByPhase[p.id];
              const isCurrent = phase === p.id;
              return (
                <div
                  key={p.id}
                  className={cn(
                    "flex items-center gap-2 rounded-md border px-2.5 py-2",
                    isCurrent
                      ? "border-zinc-900 bg-zinc-50"
                      : "border-zinc-200 bg-white",
                  )}
                >
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                      Фаза {p.id}
                    </div>
                    <div className="text-[11px] text-zinc-700 font-medium">
                      {p.shortLabel}
                    </div>
                  </div>
                  <input
                    type="number"
                    min={0}
                    value={r.min}
                    onChange={(e) =>
                      updateHeadcount(block.id, p.id, {
                        min: Math.max(0, parseInt(e.target.value || "0", 10)),
                        max: r.max,
                      })
                    }
                    className="h-7 w-12 rounded-md border border-zinc-300 bg-white px-2 text-[11px] tabular-nums text-center"
                  />
                  <span className="text-xs text-zinc-400">–</span>
                  <input
                    type="number"
                    min={0}
                    value={r.max}
                    onChange={(e) =>
                      updateHeadcount(block.id, p.id, {
                        min: r.min,
                        max: Math.max(
                          r.min,
                          parseInt(e.target.value || "0", 10),
                        ),
                      })
                    }
                    className="h-7 w-12 rounded-md border border-zinc-300 bg-white px-2 text-[11px] tabular-nums text-center"
                  />
                  <span className="text-[10px] text-zinc-500 w-16 text-right tabular-nums">
                    {formatRange(r.min, r.max)} осіб
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-2 border-t border-zinc-100">
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              if (
                confirm(
                  `Видалити ${block.name}? Всі суб-блоки і ролі також будуть видалені.`,
                )
              ) {
                removeBlock(block.id);
                onClose();
              }
            }}
          >
            <Trash2 className="h-3 w-3" /> Видалити блок
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

function isDescendantOf(
  candidate: Block,
  ancestorId: string,
  all: Block[],
): boolean {
  let current: Block | undefined = candidate;
  while (current) {
    if (current.id === ancestorId) return true;
    current = all.find((b) => b.id === current?.parentId);
  }
  return false;
}
