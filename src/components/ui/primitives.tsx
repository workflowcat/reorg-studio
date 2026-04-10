import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-5 pt-5 pb-3", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-sm font-semibold tracking-tight text-zinc-900",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xs text-zinc-500 leading-relaxed mt-1", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function CardBody({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-5 pb-5", className)} {...rest}>
      {children}
    </div>
  );
}

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "muted" | "outline" | "dark";
};

export function Badge({
  className,
  children,
  tone = "default",
  ...rest
}: BadgeProps) {
  const styles: Record<string, string> = {
    default: "bg-zinc-100 text-zinc-700",
    muted: "bg-zinc-50 text-zinc-500",
    outline: "border border-zinc-300 text-zinc-700",
    dark: "bg-zinc-900 text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium",
        styles[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "danger";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ...rest
}: ButtonProps) {
  const variants: Record<string, string> = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline:
      "border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50",
    ghost: "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
    danger:
      "bg-white border border-rose-200 text-rose-700 hover:bg-rose-50",
  };
  const sizes: Record<string, string> = {
    sm: "h-7 px-2.5 text-[11px] rounded-md",
    md: "h-9 px-3.5 text-xs rounded-md",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-1.5 font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Input({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-9 w-full rounded-md border border-zinc-300 bg-white px-3 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900",
        className,
      )}
      {...rest}
    />
  );
}

export function Textarea({
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[72px] w-full rounded-md border border-zinc-300 bg-white p-3 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900",
        className,
      )}
      {...rest}
    />
  );
}

export function Label({
  className,
  children,
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-[11px] font-medium uppercase tracking-wider text-zinc-500",
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-zinc-200", className)} />;
}

/* Block color palette → Tailwind utility map */
export const BLOCK_COLORS: Record<
  string,
  { bg: string; border: string; text: string; chip: string }
> = {
  zinc: {
    bg: "bg-zinc-900",
    border: "border-zinc-900",
    text: "text-white",
    chip: "bg-zinc-100 text-zinc-700",
  },
  slate: {
    bg: "bg-slate-700",
    border: "border-slate-700",
    text: "text-white",
    chip: "bg-slate-100 text-slate-700",
  },
  amber: {
    bg: "bg-amber-500",
    border: "border-amber-500",
    text: "text-white",
    chip: "bg-amber-50 text-amber-800",
  },
  emerald: {
    bg: "bg-emerald-600",
    border: "border-emerald-600",
    text: "text-white",
    chip: "bg-emerald-50 text-emerald-800",
  },
  rose: {
    bg: "bg-rose-600",
    border: "border-rose-600",
    text: "text-white",
    chip: "bg-rose-50 text-rose-800",
  },
  violet: {
    bg: "bg-violet-600",
    border: "border-violet-600",
    text: "text-white",
    chip: "bg-violet-50 text-violet-800",
  },
  sky: {
    bg: "bg-sky-600",
    border: "border-sky-600",
    text: "text-white",
    chip: "bg-sky-50 text-sky-800",
  },
  red: {
    bg: "bg-red-600",
    border: "border-red-600",
    text: "text-white",
    chip: "bg-red-50 text-red-800",
  },
  teal: {
    bg: "bg-teal-600",
    border: "border-teal-600",
    text: "text-white",
    chip: "bg-teal-50 text-teal-800",
  },
};

export function blockColor(color: string) {
  return BLOCK_COLORS[color] ?? BLOCK_COLORS.zinc;
}
