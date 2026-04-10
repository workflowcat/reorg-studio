"use client";

import { useRef, useState } from "react";
import { useStore, totalHeadcount } from "@/lib/store";
import { PHASES } from "@/lib/default-data";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Label,
  Textarea,
  Button,
  Badge,
  Divider,
} from "@/components/ui/primitives";
import { formatRange } from "@/lib/utils";
import {
  Download,
  Upload,
  RotateCcw,
  Copy,
  Check,
  FileJson,
} from "lucide-react";

export function ScenariosWorkspace() {
  const scenario = useStore((s) => s.scenario);
  const updateMeta = useStore((s) => s.updateScenarioMeta);
  const resetScenario = useStore((s) => s.resetScenario);

  const [copied, setCopied] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function exportJson() {
    const blob = new Blob([JSON.stringify(scenario, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reorg-scenario-${scenario.id}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function copyJson() {
    navigator.clipboard.writeText(JSON.stringify(scenario, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function handleImportClick() {
    fileRef.current?.click();
  }

  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    setImportError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (
          !parsed ||
          !Array.isArray(parsed.blocks) ||
          !Array.isArray(parsed.raci)
        ) {
          throw new Error("Цей файл не схожий на експорт сценарію.");
        }
        // Overwrite current scenario with imported one.
        useStore.setState({ scenario: parsed });
      } catch (err) {
        setImportError(
          err instanceof Error ? err.message : "Не вдалося розпарсити JSON.",
        );
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  return (
    <div className="space-y-6">
      {/* Metadata */}
      <Card>
        <CardHeader>
          <CardTitle>Деталі сценарію</CardTitle>
          <CardDescription>
            Дайте сценарію осмислену назву, щоб команда розуміла, що саме
            ви змоделювали.
          </CardDescription>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Назва</Label>
            <Input
              id="name"
              value={scenario.name}
              onChange={(e) => updateMeta({ name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="desc">Опис</Label>
            <Textarea
              id="desc"
              value={scenario.description}
              onChange={(e) => updateMeta({ description: e.target.value })}
            />
          </div>
          <div className="text-[10px] text-zinc-400 font-mono">
            Останнє оновлення:{" "}
            {new Date(scenario.updatedAt).toLocaleString("uk-UA")}
          </div>
        </CardBody>
      </Card>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Підсумок по фазах</CardTitle>
          <CardDescription>
            Знімок поточного сценарію на кожній фазі росту.
          </CardDescription>
        </CardHeader>
        <CardBody>
          <div className="grid gap-3 md:grid-cols-3">
            {PHASES.map((p) => {
              const total = totalHeadcount(scenario.blocks, p.id);
              const activeBlocks = scenario.blocks.filter(
                (b) =>
                  b.isCore &&
                  b.headcountByPhase[p.id].max > 0,
              );
              return (
                <div
                  key={p.id}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 p-3"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Badge tone="dark">Фаза {p.id}</Badge>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {p.shortLabel}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-zinc-900 tabular-nums">
                    {formatRange(total.min, total.max)}
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    {activeBlocks.length} активних core-блоків
                  </div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>

      {/* Export / Import / Reset */}
      <Card>
        <CardHeader>
          <CardTitle>Шеринг і персистентність</CardTitle>
          <CardDescription>
            Ваш сценарій живе у localStorage на цьому пристрої. Експортуйте
            у JSON, щоб поділитися з командою, або щоб закомітити його у
            version control як planning-артефакт.
          </CardDescription>
        </CardHeader>
        <CardBody className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button onClick={exportJson}>
              <Download className="h-3 w-3" />
              Експорт JSON
            </Button>
            <Button variant="outline" onClick={copyJson}>
              {copied ? (
                <>
                  <Check className="h-3 w-3" /> Скопійовано
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" /> Скопіювати у буфер
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleImportClick}>
              <Upload className="h-3 w-3" /> Імпорт JSON
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={handleImportFile}
            />
            <div className="ml-auto">
              <Button
                variant="danger"
                onClick={() => {
                  if (
                    confirm(
                      "Скинути сценарій до дефолтного baseline? Ваші зміни будуть втрачені.",
                    )
                  ) {
                    resetScenario();
                  }
                }}
              >
                <RotateCcw className="h-3 w-3" /> Скинути до baseline
              </Button>
            </div>
          </div>
          {importError && (
            <div className="text-[11px] text-rose-700 bg-rose-50 border border-rose-200 rounded-md px-3 py-2">
              Імпорт не вдався: {importError}
            </div>
          )}
          <Divider />
          <div className="flex items-start gap-2 text-[11px] text-zinc-500">
            <FileJson className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            <span>
              Експортований JSON містить блоки, ролі і RACI matrix.
              Повторний імпорт замінює поточний сценарій. Використовуйте
              це для рев&apos;ю, архівації рішень або version-control-у
              орг-змін поруч із вашим product roadmap.
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
