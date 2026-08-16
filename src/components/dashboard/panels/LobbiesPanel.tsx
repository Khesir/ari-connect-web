import type { Lobby } from "@/data/mock/dashboard";
import { RoleBadge } from "../RoleBadge";
import { VisibilityPill } from "../VisibilityPill";
import { SectionHead } from "../SectionHead";
import styles from "./LobbiesPanel.module.scss";

export function LobbiesPanel({ lobbies }: { lobbies: Lobby[] }) {
  return (
    <div>
      <SectionHead title="My Lobbies" comment="// lobbies you own or moderate" />
      <div className={styles.grid}>
        {lobbies.map((lobby) => {
          const pct = Math.round((lobby.connected / lobby.limit) * 100);
          return (
            <div key={lobby.id} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.icon} style={{ background: lobby.iconGradient }}>
                  {lobby.initial}
                </span>
                <div className={styles.info}>
                  <div className={styles.name}>{lobby.name}</div>
                  <div className={styles.activity}>{lobby.activity}</div>
                </div>
                <RoleBadge role={lobby.roleKey} />
              </div>
              <div className={styles.serversRow}>
                <span className={styles.serversLabel}>servers</span>
                <span className={styles.serversValue}>
                  {lobby.connected} / {lobby.limit}
                </span>
              </div>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: `${pct}%` }} />
              </div>
              <div className={styles.bottom}>
                <VisibilityPill visibility={lobby.visibility} />
              </div>
            </div>
          );
        })}
        <button type="button" className={styles.create}>
          <span className={styles.createPlus}>+</span>
          <span className={styles.createLabel}>create a new lobby</span>
        </button>
      </div>
    </div>
  );
}
