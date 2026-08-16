import { TAB_DEFS, type TabId } from "./access";
import styles from "./Tabs.module.scss";

interface TabsProps {
  activeTab: TabId;
  allowedTabs: TabId[];
  onSelect: (tab: TabId) => void;
}

export function Tabs({ activeTab, allowedTabs, onSelect }: TabsProps) {
  return (
    <div className={styles.tabs}>
      {TAB_DEFS.map((tab) => {
        const active = tab.id === activeTab;
        const locked = !allowedTabs.includes(tab.id);
        const classNames = [
          styles.tab,
          active ? styles.active : "",
          active && tab.id === "danger" ? styles.activeDanger : "",
          locked ? styles.locked : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button key={tab.id} type="button" onClick={() => onSelect(tab.id)} className={classNames}>
            <span>{tab.label}</span>
            {locked && <span className={styles.lockIcon}>🔒</span>}
          </button>
        );
      })}
    </div>
  );
}
