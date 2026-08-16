import { BackNav } from "@/components/layout/BackNav";
import { LoginCard } from "@/components/login/LoginCard";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <BackNav />
      <div className={styles.center}>
        <LoginCard />
      </div>
    </div>
  );
}
