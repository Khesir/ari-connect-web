import styles from "./Support.module.scss";

const links = [
  {
    href: "https://ko-fi.com",
    icon: "☕",
    iconBg: "#ff5e5b",
    title: "Ko-fi",
    subtitle: "one-off coffee · ko-fi.com/ari",
  },
];

export function Support() {
  return (
    <section id="support" className={styles.section}>
      <div className={styles.head}>
        <span className={styles.kicker}>03 — Support the dev</span>
        <div className={styles.divider} />
      </div>

      <div className={styles.layout}>
        <div>
          <h2 className={styles.heading}>
            Ari is free, and
            <br />
            <span className={styles.italic}>stays free.</span>
          </h2>
          <p className={styles.lede}>
            There&apos;s no paid tier and nothing locked behind a paywall. If Ari helps your community, you can
            chip in to the dev.
          </p>
          <p className={styles.note}>
            {"// every contribution goes straight into the"}
            <br />
            {"// "}
            <span className={styles.pink}>Ari development &amp; maintenance fund</span>
            {" — hosting,"}
            <br />
            {"// uptime and new features. nothing else."}
          </p>
        </div>
        <div className={styles.cards}>
          {links.map((link) => (
            <a key={link.title} href={link.href} target="_blank" rel="noreferrer" className={styles.card}>
              <span className={styles.cardIcon} style={{ background: link.iconBg }}>
                {link.icon}
              </span>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{link.title}</div>
                <div className={styles.cardSubtitle}>{link.subtitle}</div>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
          <div className={styles.footnote}>100% → Ari development &amp; maintenance fund</div>
        </div>
      </div>
    </section>
  );
}
