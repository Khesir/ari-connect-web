import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "discord";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  external,
  onClick,
  type = "button",
  className,
  children,
}: ButtonProps) {
  const classes = [styles.btn, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
