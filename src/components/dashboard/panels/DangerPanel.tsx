import { currentLobby } from "@/data/mock/dashboard";
import { SectionHead } from "../SectionHead";
import styles from "./DangerPanel.module.scss";

export function DangerPanel() {
  return (
    <div>
      <SectionHead title="Danger Zone" danger />
      <div className={styles.stack}>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.title}>Transfer ownership</div>
            <div className={styles.body}>
              Hand this lobby to another user. You&apos;ll drop to Level 2 and lose Admin rights.
            </div>
          </div>
          <button type="button" className={styles.transfer}>
            Transfer…
          </button>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.title}>Delete lobby</div>
            <div className={styles.body}>
              Cascades: disconnects all {currentLobby.connected} servers and erases every mod, mute and filter
              record. This cannot be undone.
            </div>
          </div>
          <button type="button" className={styles.delete}>
            Delete lobby
          </button>
        </div>
      </div>
    </div>
  );
}
