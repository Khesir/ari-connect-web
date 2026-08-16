import Image from "next/image";
import mascot from "@/assets/mascot.png";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.scss";

const stats = [
  { value: "1.2k", suffix: "+", label: "servers bridged" },
  { value: "480k", suffix: "", label: "messages relayed" },
  { value: "99.9", suffix: "%", label: "uptime" },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>Discord · cross-server relay</div>
        <h1 className={styles.headline}>
          Cross-server chat,
          <br />
          <span className={styles.italic}>done right.</span>
        </h1>
        <p className={styles.lede}>
          Ari Connect bridges your Discord communities safely — share messages, run events and grow
          engagement, all without handing strangers full server access.
        </p>
        <div className={styles.actions}>
          <Button href="https://discord.com" external variant="primary">
            Add to Discord
          </Button>
          <Button href="https://github.com" external variant="secondary">
            $ view on github
          </Button>
        </div>
        {/* <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>
                {stat.value}
                <span className={styles.accent}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
      <div className={styles.art}>
        <div className={styles.glow} />
        <Image src={mascot} alt="Ari mascot" className={styles.mascot} priority />
      </div>
    </section>
  );
}
