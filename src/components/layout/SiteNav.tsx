import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import styles from "./SiteNav.module.scss";

const links = [
  { href: "#features", label: "Features" },
  { href: "#support", label: "Support" },
];

export function SiteNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.links}>
        <Link href="/" className={`${styles.link} ${styles.active}`}>
          Home
        </Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
        <Button href="/login" className={styles.signIn} variant="primary">
          Sign in
        </Button>
      </div>
    </nav>
  );
}
