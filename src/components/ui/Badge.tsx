import { clsx } from "clsx";

type BadgeVariant = "neutral" | "success" | "warning" | "danger" | "brand";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export function Badge({ label, variant = "neutral" }: BadgeProps) {
  const styles = {
    neutral: "bg-gray-100 text-gray-600",
    success: "bg-emerald-50 text-emerald-700", // Minty green from image
    warning: "bg-amber-50 text-amber-700",     // Pale yellow from image
    danger:  "bg-rose-50 text-rose-700",       // Soft pink/red
    brand:   "bg-indigo-50 text-indigo-700",
  };

  return (
    <span className={clsx(
      "px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
      styles[variant]
    )}>
      {label}
    </span>
  );
}