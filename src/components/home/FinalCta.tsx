import { Button } from "@/components/ui/Button";
import styles from "./FinalCta.module.scss";

export function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Bridge your servers <span className={styles.italic}>today.</span>
        </h2>
        <p className={styles.lede}>Free, open-source, and live in under a minute.</p>
        <div className={styles.actions}>
          <Button href="https://discord.com" external variant="primary">
            Add to Discord
          </Button>
          <Button href="/login" variant="secondary">
            $ sign in
          </Button>
        </div>
      </div>
    </section>
  );
}
