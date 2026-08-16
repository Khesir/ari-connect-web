import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import styles from "./SiteFooter.module.scss";

const links = [
  { href: "https://github.com", label: "github", external: true },
  { href: "https://discord.com", label: "discord", external: true },
  { href: "#support", label: "support", external: false },
  { href: "/terms", label: "terms", external: false },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Logo wordmark={false} size={28} />
        <span className={styles.tag}>ari.connect · cross-server, done right</span>
      </div>
      <div className={styles.links}>
        {links.map((link) =>
          link.external ? (
            <a key={link.label} href={link.href} className={styles.link} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          )
        )}
      </div>
    </footer>
  );
}
