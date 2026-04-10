"use client";

import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import type { RaciActivity, RaciValue } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Button,
  Badge,
  Input,
} from "@/components/ui/primitives";
import { Plus, Trash2, AlertTriangle, CheckCircle2, Search } from "lucide-react";

const RACI_VALUES: { value: RaciValue; label: string; description: string; color: string }[] = [
  {
    value: "R",
    label: "Responsible",
    description: "Виконує роботу",
    color: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    value: "A",
    label: "Accountable",
    description: "Володіє результатом",
    color: "bg-sky-100 text-sky-800 border-sky-300",
  },
  {
    value: "C",
    label: "Consulted",
    description: "Має вхід",
    color: "bg-amber-100 text-amber-800 border-amber-300",
  },
  {
    value: "I",
    label: "Informed",
    description: "Тримають в курсі",
    color: "bg-zinc-100 text-zinc-700 border-zinc-300",
  },
];

export function RaciWorkspace() {
  const scenario = useStore((s) => s.scenario);
  const setRaci = useStore((s) => s.setRaci);
  const addActivity = useStore((s) => s.addActivity);
  const removeActivity = useStore((s) => s.removeActivity);
  const updateActivity = useStore((s) => s.updateActivity);

  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Use only core blocks as columns (skip sub-blocks)
  const columns = useMemo(
    () => scenario.blocks.filter((b) => b.isCore),
    [scenario.blocks],
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    scenario.raci.forEach((a) => set.add(a.category));
    return ["all", ...Array.from(set)];
  }, [scenario.raci]);

  const filtered = useMemo(() => {
    return scenario.raci.filter((a) => {
      if (activeCategory !== "all" && a.category !== activeCategory)
        return false;
      if (!filter) return true;
      const q = filter.toLowerCase();
      return (
        a.name.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.description?.toLowerCase().includes(q)
      );
    });
  }, [scenario.raci, filter, activeCategory]);

  function handleCycle(activity: RaciActivity, blockId: string) {
    const current = activity.assignments[blockId] ?? "";
    const order: RaciValue[] = ["", "R", "A", "C", "I"];
    const idx = order.indexOf(current);
    const next = order[(idx + 1) % order.length];
    setRaci(activity.id, blockId, next);
  }

  function handleAdd() {
    const id = `a-${Date.now()}`;
    addActivity({
      id,
      name: "Нова активність",
      category: "Кастом",
      description: "",
      assignments: Object.fromEntries(
        columns.map((b) => [b.id, ""] as const),
      ),
    });
  }

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-[11px]">
        <span className="text-zinc-500 mr-1">Легенда:</span>
        {RACI_VALUES.map((v) => (
          <span
            key={v.value}
            className={cn(
              "inline-flex items-center gap-1 rounded border px-2 py-0.5 font-medium",
              v.color,
            )}
          >
            <span className="font-bold">{v.value}</span>
            <span className="text-[10px]">{v.description}</span>
          </span>
        ))}
        <span className="text-zinc-400 ml-1">· клікни на комірку, щоб перемикати</span>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
          <Input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Пошук активностей…"
            className="pl-8"
          />
        </div>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
                activeCategory === cat
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:bg-zinc-100",
              )}
            >
              {cat === "all" ? "Усі" : cat}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <AuditBadge activities={scenario.raci} columns={columns} />
          <Button size="sm" variant="outline" onClick={handleAdd}>
            <Plus className="h-3 w-3" /> Додати активність
          </Button>
        </div>
      </div>

      {/* Matrix */}
      <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white scrollbar-thin">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="bg-zinc-50 border-b border-zinc-200">
              <th className="sticky left-0 z-10 bg-zinc-50 text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 border-r border-zinc-200 min-w-[260px]">
                Активність
              </th>
              {columns.map((col) => (
                <th
                  key={col.id}
                  className="px-2 py-3 text-center border-r border-zinc-200"
                >
                  <div className="text-[10px] font-semibold text-zinc-900">
                    {col.code}
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-0.5">
                    {col.name.split(" ")[0]}
                  </div>
                </th>
              ))}
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 2}
                  className="p-8 text-center text-xs text-zinc-400"
                >
                  Жодна активність не відповідає фільтру.
                </td>
              </tr>
            ) : (
              filtered.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-zinc-100 hover:bg-zinc-50/60 group"
                >
                  <td className="sticky left-0 z-10 bg-white group-hover:bg-zinc-50/60 px-4 py-3 border-r border-zinc-200 min-w-[260px]">
                    <input
                      value={activity.name}
                      onChange={(e) =>
                        updateActivity(activity.id, { name: e.target.value })
                      }
                      className="w-full text-xs font-medium text-zinc-900 bg-transparent focus:outline-none focus:bg-white rounded px-1 -mx-1"
                    />
                    <div className="flex items-center gap-1.5 mt-1">
                      <Badge tone="muted" className="text-[9px]">
                        {activity.category}
                      </Badge>
                      {activity.description && (
                        <span className="text-[10px] text-zinc-400 truncate">
                          {activity.description}
                        </span>
                      )}
                    </div>
                  </td>
                  {columns.map((col) => {
                    const value = activity.assignments[col.id] ?? "";
                    const colors =
                      RACI_VALUES.find((v) => v.value === value)?.color ?? "";
                    return (
                      <td
                        key={col.id}
                        className="p-0 border-r border-zinc-100"
                      >
                        <button
                          onClick={() => handleCycle(activity, col.id)}
                          className={cn(
                            "w-full h-11 grid place-items-center transition-colors",
                            value
                              ? cn(colors, "font-bold text-xs")
                              : "text-zinc-300 hover:bg-zinc-100 hover:text-zinc-500 text-[10px]",
                          )}
                        >
                          {value || "·"}
                        </button>
                      </td>
                    );
                  })}
                  <td className="w-10 text-center">
                    <button
                      onClick={() => {
                        if (confirm(`Видалити «${activity.name}»?`))
                          removeActivity(activity.id);
                      }}
                      className="h-6 w-6 text-zinc-300 hover:text-rose-600 rounded-md grid place-items-center opacity-0 group-hover:opacity-100"
                      aria-label="Видалити активність"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Audit summary */}
      <AuditPanel activities={scenario.raci} columns={columns} />
    </div>
  );
}

function AuditBadge({
  activities,
}: {
  activities: RaciActivity[];
  columns: { id: string }[];
}) {
  const issues = auditRaci(activities);
  if (issues.length === 0) {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] text-emerald-700">
        <CheckCircle2 className="h-3 w-3" />
        RACI чистий
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] text-amber-800">
      <AlertTriangle className="h-3 w-3" />
      {issues.length} {pluralizeIssues(issues.length)}
    </span>
  );
}

function AuditPanel({
  activities,
}: {
  activities: RaciActivity[];
  columns: { id: string; name: string; code: string }[];
}) {
  const issues = auditRaci(activities);
  if (issues.length === 0) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800 flex items-start gap-2">
        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold">RACI аудит пройдено.</strong>{" "}
          Кожна активність має рівно одного Accountable-власника і щонайменше
          одного Responsible.
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
      <div className="flex items-start gap-2 mb-2">
        <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
        <strong className="font-semibold">
          RACI аудит — {issues.length} {pluralizeIssues(issues.length)}
        </strong>
      </div>
      <ul className="space-y-1 ml-6 list-disc">
        {issues.slice(0, 8).map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
        {issues.length > 8 && (
          <li className="text-amber-600">
            …і ще {issues.length - 8}
          </li>
        )}
      </ul>
    </div>
  );
}

function auditRaci(activities: RaciActivity[]): string[] {
  const issues: string[] = [];
  for (const a of activities) {
    const values = Object.values(a.assignments);
    const aCount = values.filter((v) => v === "A").length;
    const rCount = values.filter((v) => v === "R").length;
    if (aCount === 0) {
      issues.push(`«${a.name}» не має Accountable-власника.`);
    } else if (aCount > 1) {
      issues.push(
        `«${a.name}» має ${aCount} Accountable-власників — має бути рівно один.`,
      );
    }
    if (rCount === 0) {
      issues.push(`«${a.name}» не має Responsible-виконавця.`);
    }
  }
  return issues;
}

function pluralizeIssues(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "проблема";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "проблеми";
  return "проблем";
}
