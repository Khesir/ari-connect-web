import { steps } from "@/data/features";
import styles from "./HowItWorks.module.scss";

export function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <span className={styles.kicker}>02 — Getting started</span>
        <div className={styles.divider} />
      </div>
      <h2 className={styles.heading}>
        Set up in <span className={styles.italic}>sixty seconds</span>.
      </h2>

      <div className={styles.layout}>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.n} className={styles.step}>
              <span className={styles.stepN}>{step.n}</span>
              <div>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepBody}>{step.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.terminalTitle}>discord — #global-lounge</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.line}>
              <span className={styles.blue}>you</span> /connect lobby:
              <span className={styles.pink}>global-lounge</span>
            </div>
            <div className={styles.green}>✓ server linked · relaying as webhook</div>
            <div className={`${styles.line} ${styles.gapTop}`}>
              <span className={styles.pink}>@maya</span> from <span className={styles.purple}>Pixel Arcade</span>:
              anyone up for ranked?
            </div>
            <div className={styles.line}>
              <span className={styles.pink}>@kettle</span> from <span className={styles.purple}>Café Lo-Fi</span>:
              i&apos;m in 🎮
            </div>
            <div className={`${styles.line} ${styles.gapTop}`}>
              <span className={styles.blue}>ari</span> filtered 1 message · blacklisted link
            </div>
            <div className={`${styles.green} ${styles.gapTop}`}>
              ari@lobby<span className={styles.dim}>:~$</span> <span className={styles.cursor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
