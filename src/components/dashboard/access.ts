import type { RoleKey } from "@/data/mock/dashboard";

export type TabId = "lobbies" | "settings" | "access" | "mods" | "muted" | "filters" | "danger";

export const TAB_DEFS: { id: TabId; label: string }[] = [
  { id: "lobbies", label: "My Lobbies" },
  { id: "settings", label: "Settings" },
  { id: "access", label: "Access Control" },
  { id: "mods", label: "Moderators" },
  { id: "muted", label: "Muted Users" },
  { id: "filters", label: "Content Filters" },
  { id: "danger", label: "Danger Zone" },
];

export const ROLE_ACCESS: Record<RoleKey, TabId[]> = {
  admin: ["lobbies", "settings", "access", "mods", "muted", "filters", "danger"],
  level2: ["lobbies", "muted", "filters"],
  level1: ["lobbies"],
};

export const ROLE_META: Record<RoleKey, { label: string }> = {
  admin: { label: "ADMIN" },
  level2: { label: "LEVEL 2" },
  level1: { label: "LEVEL 1" },
};

export const LOCK_TITLES: Partial<Record<TabId, string>> = {
  settings: "Lobby Settings is Admin-only",
  access: "Access Control is Admin-only",
  mods: "Moderators is Admin-only",
  danger: "Danger Zone is Admin-only",
  muted: "Muted Users needs Level 2+",
  filters: "Content Filters needs Level 2+",
};

export const LOCK_MESSAGES: Record<RoleKey, string> = {
  admin: "",
  level2:
    "Level 2 mods can manage mutes and content filters, but lobby configuration is reserved for the Admin.",
  level1: "Level 1 mods can act on chat in-server. Dashboard configuration is reserved for higher roles.",
};
