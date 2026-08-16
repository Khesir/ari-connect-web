import { features } from "@/data/features";
import styles from "./Features.module.scss";

export function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.head}>
        <span className={styles.kicker}>01 — What it does</span>
        <div className={styles.divider} />
      </div>
      <h2 className={styles.heading}>
        Everything you need to <span className={styles.italic}>bridge</span> communities.
      </h2>

      <div className={styles.grid}>
        {features.map((feature, i) => (
          <div key={feature.no} className={`${styles.card} ${i % 3 === 0 ? styles.noLeftBorder : ""}`}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>{feature.icon}</span>
              <span className={styles.no}>{feature.no}</span>
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.body}>{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
