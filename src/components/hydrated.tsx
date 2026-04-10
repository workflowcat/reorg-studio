"use client";

import { useSyncExternalStore } from "react";

/**
 * Wrap client-only UI that reads from localStorage/zustand persist
 * to avoid hydration mismatches. Uses useSyncExternalStore so we
 * never call setState from an effect (which React 19 warns about).
 */
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Hydrated({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
