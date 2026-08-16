import styles from "./SectionHead.module.scss";

interface SectionHeadProps {
  title: string;
  comment?: string;
  danger?: boolean;
}

export function SectionHead({ title, comment, danger }: SectionHeadProps) {
  return (
    <div className={styles.row}>
      <span className={danger ? styles.bangDanger : styles.dollar}>{danger ? "!" : "$"}</span>
      <h2 className={danger ? styles.titleDanger : styles.title}>{title}</h2>
      {comment && <span className={styles.comment}>{comment}</span>}
    </div>
  );
}
