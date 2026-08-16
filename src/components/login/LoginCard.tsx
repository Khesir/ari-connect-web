import Image from "next/image";
import Link from "next/link";
import mascot from "@/assets/mascot.png";
import { DiscordSignInButton } from "./DiscordSignInButton";
import styles from "./LoginCard.module.scss";

const trustItems = [
  "Reads your username & server list — nothing else",
  "Never posts or messages on your behalf",
  "Revoke access anytime from Discord settings",
];

export function LoginCard() {
  return (
    <div className={styles.wrap}>
      <div className={styles.glowWrap}>
        <div className={styles.glow} />
        <Image src={mascot} alt="Ari" width={88} height={88} className={styles.mascot} />
      </div>

      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Authentication</div>
          <h1 className={styles.heading}>
            Sign in to <span className={styles.italic}>Ari Connect</span>
          </h1>
          <p className={styles.lede}>
            Your dashboard, lobbies and roles are tied to your Discord account. Continue below to open your
            dashboard.
          </p>
        </div>

        <DiscordSignInButton />

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerLabel}>Discord is the only sign-in</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.trust}>
          {trustItems.map((item) => (
            <div key={item} className={styles.trustItem}>
              <span className={styles.check}>✓</span> {item}
            </div>
          ))}
        </div>
      </div>

      <p className={styles.terms}>
        By continuing you agree to the{" "}
        <Link href="/terms" className={styles.termsLink}>
          Terms
        </Link>{" "}
        &amp;{" "}
        <Link href="/terms#5-data-collection--privacy" className={styles.termsLink}>
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
