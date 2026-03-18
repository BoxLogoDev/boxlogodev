import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export function GradientText({ children, className, as: Tag = "span" }: GradientTextProps) {
  return <Tag className={cn("font-serif", className)}>{children}</Tag>;
}
