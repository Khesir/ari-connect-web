import Image from "next/image";
import mascot from "@/assets/mascot.png";
import { Logo } from "@/components/ui/Logo";
import type { RoleKey } from "@/data/mock/dashboard";
import styles from "./TopBar.module.scss";

interface TopBarProps {
  lobbyName: string;
  lobbyInitial: string;
  role: RoleKey;
  onGoLobbies: () => void;
  onSetRole: (role: RoleKey) => void;
}

const roleOrder: { key: RoleKey; label: string }[] = [
  { key: "admin", label: "Admin" },
  { key: "level2", label: "Level 2" },
  { key: "level1", label: "Level 1" },
];

export function TopBar({ lobbyName, lobbyInitial, role, onGoLobbies, onSetRole }: TopBarProps) {
  return (
    <div className={styles.bar}>
      <Logo />
      <div className={styles.divider} />

      <button type="button" onClick={onGoLobbies} className={styles.switcher}>
        <span className={styles.switcherIcon}>{lobbyInitial}</span>
        <span className={styles.switcherName}>{lobbyName}</span>
        <span className={styles.chevron}>▼</span>
      </button>

      <div className={styles.spacer} />

      <div className={styles.viewAs}>
        <span className={styles.viewAsLabel}>view as</span>
        <div className={styles.segmented}>
          {roleOrder.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => onSetRole(r.key)}
              className={role === r.key ? styles.segActive : styles.seg}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.divider} />
      <Image src={mascot} alt="you" width={30} height={30} className={styles.avatar} />
    </div>
  );
}
