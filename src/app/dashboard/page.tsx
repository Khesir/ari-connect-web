import { getLobbies } from "@/data/mock/dashboard";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import styles from "./page.module.scss";

export default function DashboardPage() {
  const lobbies = getLobbies();

  return (
    <div className={styles.page}>
      <DashboardShell initialLobbies={lobbies} />
    </div>
  );
}
