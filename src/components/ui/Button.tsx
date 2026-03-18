import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
    size === "md" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-7 py-3 text-sm",
    variant === "primary" &&
      "bg-foreground text-background rounded-full hover:opacity-80",
    variant === "secondary" &&
      "text-foreground-secondary border border-[var(--border)] rounded-full hover:border-[var(--border-hover)] hover:text-foreground",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
