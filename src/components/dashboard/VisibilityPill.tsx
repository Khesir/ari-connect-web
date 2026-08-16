import styles from "./VisibilityPill.module.scss";

export function VisibilityPill({ visibility }: { visibility: "public" | "private" }) {
  return (
    <span className={visibility === "public" ? styles.public : styles.private}>{visibility}</span>
  );
}
