// Core domain types for the reorg tool

export type PhaseId = 1 | 2 | 3;

export type Phase = {
  id: PhaseId;
  name: string;
  headcountRange: { min: number; max: number };
  shortLabel: string;
  description: string;
};

export type BlockId = string;

export type Block = {
  id: BlockId;
  code: string; // short code like ENG, MFG
  name: string;
  purpose: string;
  parentId?: BlockId; // for hierarchy
  color: string; // tailwind accent, e.g. "amber"
  headcountByPhase: Record<PhaseId, { min: number; max: number }>;
  isCore?: boolean; // true for top-level functional blocks
  reportsTo?: string; // e.g. "CEO", "COO"
};

export type RoleId = string;

export type Role = {
  id: RoleId;
  blockId: BlockId;
  title: string;
  seniority: "lead" | "senior" | "mid" | "junior";
  count: number;
  phase: PhaseId; // earliest phase this role appears
  responsibilities: string[];
  skills: string[];
};

// RACI
export type RaciValue = "R" | "A" | "C" | "I" | "";

export type RaciActivity = {
  id: string;
  name: string;
  category: string; // e.g. "Product lifecycle", "Quality", "Supply chain"
  description?: string;
  assignments: Record<BlockId, RaciValue>;
};

// Scenarios / planning state
export type Scenario = {
  id: string;
  name: string;
  description: string;
  currentPhase: PhaseId;
  blocks: Block[];
  roles: Role[];
  raci: RaciActivity[];
  createdAt: number;
  updatedAt: number;
};
