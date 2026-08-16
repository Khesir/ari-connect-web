import type { RoleKey } from "@/data/mock/dashboard";
import styles from "./RoleBadge.module.scss";

const roleClass: Record<RoleKey, string> = {
  admin: styles.admin,
  level2: styles.level2,
  level1: styles.level1,
};

const roleLabel: Record<RoleKey, string> = {
  admin: "ADMIN",
  level2: "LEVEL 2",
  level1: "LEVEL 1",
};

interface RoleBadgeProps {
  role: RoleKey;
  className?: string;
}

export function RoleBadge({ role, className }: RoleBadgeProps) {
  return (
    <span className={[styles.badge, roleClass[role], className].filter(Boolean).join(" ")}>
      {roleLabel[role]}
    </span>
  );
}

export function levelToRoleKey(level: "LEVEL 1" | "LEVEL 2"): RoleKey {
  return level === "LEVEL 2" ? "level2" : "level1";
}
