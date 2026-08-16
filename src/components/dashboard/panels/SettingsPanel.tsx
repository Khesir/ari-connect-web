import { currentLobby } from "@/data/mock/dashboard";
import { SectionHead } from "../SectionHead";
import styles from "./SettingsPanel.module.scss";

export function SettingsPanel() {
  return (
    <div>
      <SectionHead title="Lobby Settings" />
      <div className={styles.card}>
        <div>
          <label className={styles.label}>lobby name</label>
          <div className={styles.field}>
            <span className={styles.fieldValue}>{currentLobby.name}</span>
          </div>
        </div>
        <div>
          <label className={styles.label}>description</label>
          <div className={styles.textarea}>{currentLobby.description}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowItem}>
            <label className={styles.label}>server limit</label>
            <div className={styles.limitRow}>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: "50%" }} />
              </div>
              <span className={styles.limitValue}>{currentLobby.limit}</span>
            </div>
          </div>
          <div className={styles.rowItemNarrow}>
            <label className={styles.label}>visibility</label>
            <div className={styles.visibilityRow}>
              <span className={styles.visibilityLabel}>Public</span>
              <span className={styles.toggleOn}>
                <span className={styles.toggleKnob} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.cancel}>
            Cancel
          </button>
          <button type="button" className={styles.save}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
