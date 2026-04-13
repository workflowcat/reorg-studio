"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Network, BookOpen, Grid3x3, LayoutGrid } from "lucide-react";

const NAV = [
  { href: "/", label: "Overview", icon: BookOpen },
  { href: "/org-chart", label: "Org Chart", icon: Network },
  { href: "/raci", label: "RACI Matrix", icon: Grid3x3 },
  { href: "/scenarios", label: "Scenarios", icon: LayoutGrid },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-zinc-900 grid place-items-center">
            <span className="text-white text-[10px] font-bold tracking-tighter">
              R/S
            </span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            Reorg Studio
          </span>
          <span className="hidden sm:inline text-[11px] text-zinc-500 font-mono pl-2 border-l border-zinc-200 ml-1">
            defense R&amp;D team design
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-1">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
