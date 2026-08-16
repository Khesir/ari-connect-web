import { currentLobby } from "@/data/mock/dashboard";
import { RoleBadge } from "./RoleBadge";
import type { RoleKey } from "@/data/mock/dashboard";
import styles from "./LobbyHeader.module.scss";

export function LobbyHeader({ role }: { role: RoleKey }) {
  const pct = Math.round((currentLobby.connected / currentLobby.limit) * 100);

  return (
    <div className={styles.header}>
      <span className={styles.icon}>{currentLobby.initial}</span>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{currentLobby.name}</h1>
          <RoleBadge role={role} />
          <span className={styles.public}>public</span>
        </div>
        <p className={styles.description}>{currentLobby.description}</p>
      </div>
      <div className={styles.stat}>
        <div className={styles.statLabel}>servers connected</div>
        <div className={styles.statValue}>
          {currentLobby.connected}
          <span className={styles.statLimit}> / {currentLobby.limit}</span>
        </div>
        <div className={styles.bar}>
          <div className={styles.barFill} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
