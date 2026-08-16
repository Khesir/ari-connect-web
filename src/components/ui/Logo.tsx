import Image from "next/image";
import Link from "next/link";
import mascot from "@/assets/mascot.png";
import styles from "./Logo.module.scss";

interface LogoProps {
  href?: string;
  size?: number;
  wordmark?: boolean;
}

export function Logo({ href = "/", size = 34, wordmark = true }: LogoProps) {
  const content = (
    <>
      <Image
        src={mascot}
        alt="Ari"
        width={size}
        height={size}
        className={styles.avatar}
        style={{ width: size, height: size }}
      />
      {wordmark && (
        <span className={styles.wordmark}>
          ari<span className={styles.gradient}>.connect</span>
        </span>
      )}
    </>
  );

  if (!href) {
    return <div className={styles.logo}>{content}</div>;
  }

  return (
    <Link href={href} className={styles.logo}>
      {content}
    </Link>
  );
}
