import { RoleBadge } from "./RoleBadge";
import type { RoleKey } from "@/data/mock/dashboard";
import styles from "./LockedPanel.module.scss";

interface LockedPanelProps {
  title: string;
  message: string;
  role: RoleKey;
}

export function LockedPanel({ title, message, role }: LockedPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.icon}>🔒</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      <div className={styles.roleRow}>
        your role here · <RoleBadge role={role} />
      </div>
    </div>
  );
}
