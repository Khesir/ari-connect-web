import { Logo } from "@/components/ui/Logo";
import styles from "./BackNav.module.scss";

export function BackNav() {
  return (
    <div className={styles.topBar}>
      <Logo />
      <a href="/" className={styles.back}>
        ← back home
      </a>
    </div>
  );
}
