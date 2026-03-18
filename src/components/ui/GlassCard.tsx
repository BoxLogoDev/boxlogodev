import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-200",
        hover && "hover:border-[var(--border-hover)] hover:shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
