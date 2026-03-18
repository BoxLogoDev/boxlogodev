import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  active?: boolean;
}

export function Badge({ children, className, color, active }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs transition-colors",
        active
          ? "bg-foreground text-background"
          : "text-foreground-muted hover:text-foreground",
        className,
      )}
      style={
        active && color
          ? { backgroundColor: color, color: "#fff" }
          : undefined
      }
    >
      {children}
    </span>
  );
}
