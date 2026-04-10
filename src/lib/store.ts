"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  Block,
  BlockId,
  PhaseId,
  RaciActivity,
  RaciValue,
  Role,
  Scenario,
} from "./types";
import { makeDefaultScenario } from "./default-data";

type StoreState = {
  scenario: Scenario;
  // Scenario-level actions
  resetScenario: () => void;
  updateScenarioMeta: (patch: Partial<Pick<Scenario, "name" | "description">>) => void;
  setCurrentPhase: (phase: PhaseId) => void;
  // Block actions
  updateBlock: (id: BlockId, patch: Partial<Block>) => void;
  updateBlockHeadcount: (
    id: BlockId,
    phase: PhaseId,
    range: { min: number; max: number },
  ) => void;
  addBlock: (block: Block) => void;
  removeBlock: (id: BlockId) => void;
  reparentBlock: (id: BlockId, newParentId: BlockId | undefined) => void;
  // Role actions
  addRole: (role: Role) => void;
  updateRole: (id: string, patch: Partial<Role>) => void;
  removeRole: (id: string) => void;
  // RACI actions
  addActivity: (activity: RaciActivity) => void;
  updateActivity: (id: string, patch: Partial<RaciActivity>) => void;
  removeActivity: (id: string) => void;
  setRaci: (activityId: string, blockId: BlockId, value: RaciValue) => void;
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      scenario: makeDefaultScenario(),

      resetScenario: () => set({ scenario: makeDefaultScenario() }),

      updateScenarioMeta: (patch) =>
        set((state) => ({
          scenario: { ...state.scenario, ...patch, updatedAt: Date.now() },
        })),

      setCurrentPhase: (phase) =>
        set((state) => ({
          scenario: { ...state.scenario, currentPhase: phase, updatedAt: Date.now() },
        })),

      updateBlock: (id, patch) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            blocks: state.scenario.blocks.map((b) =>
              b.id === id ? { ...b, ...patch } : b,
            ),
            updatedAt: Date.now(),
          },
        })),

      updateBlockHeadcount: (id, phase, range) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            blocks: state.scenario.blocks.map((b) =>
              b.id === id
                ? {
                    ...b,
                    headcountByPhase: {
                      ...b.headcountByPhase,
                      [phase]: range,
                    },
                  }
                : b,
            ),
            updatedAt: Date.now(),
          },
        })),

      addBlock: (block) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            blocks: [...state.scenario.blocks, block],
            updatedAt: Date.now(),
          },
        })),

      removeBlock: (id) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            blocks: state.scenario.blocks.filter(
              (b) => b.id !== id && b.parentId !== id,
            ),
            roles: state.scenario.roles.filter((r) => r.blockId !== id),
            updatedAt: Date.now(),
          },
        })),

      reparentBlock: (id, newParentId) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            blocks: state.scenario.blocks.map((b) =>
              b.id === id ? { ...b, parentId: newParentId } : b,
            ),
            updatedAt: Date.now(),
          },
        })),

      addRole: (role) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            roles: [...state.scenario.roles, role],
            updatedAt: Date.now(),
          },
        })),

      updateRole: (id, patch) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            roles: state.scenario.roles.map((r) =>
              r.id === id ? { ...r, ...patch } : r,
            ),
            updatedAt: Date.now(),
          },
        })),

      removeRole: (id) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            roles: state.scenario.roles.filter((r) => r.id !== id),
            updatedAt: Date.now(),
          },
        })),

      addActivity: (activity) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            raci: [...state.scenario.raci, activity],
            updatedAt: Date.now(),
          },
        })),

      updateActivity: (id, patch) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            raci: state.scenario.raci.map((a) =>
              a.id === id ? { ...a, ...patch } : a,
            ),
            updatedAt: Date.now(),
          },
        })),

      removeActivity: (id) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            raci: state.scenario.raci.filter((a) => a.id !== id),
            updatedAt: Date.now(),
          },
        })),

      setRaci: (activityId, blockId, value) =>
        set((state) => ({
          scenario: {
            ...state.scenario,
            raci: state.scenario.raci.map((a) =>
              a.id === activityId
                ? {
                    ...a,
                    assignments: { ...a.assignments, [blockId]: value },
                  }
                : a,
            ),
            updatedAt: Date.now(),
          },
        })),
    }),
    {
      name: "reorg-tool-v2-ua",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ scenario: state.scenario }),
    },
  ),
);

// Selector helpers

export function totalHeadcount(blocks: Block[], phase: PhaseId) {
  const core = blocks.filter((b) => b.isCore);
  return core.reduce(
    (acc, b) => {
      const r = b.headcountByPhase[phase];
      return { min: acc.min + r.min, max: acc.max + r.max };
    },
    { min: 0, max: 0 },
  );
}

export function childrenOf(blocks: Block[], parentId: BlockId | undefined) {
  return blocks.filter((b) => b.parentId === parentId);
}
