import * as React from "react";
import { cn } from "@/shared/utils/cn";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning"
  | "info";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900",
  secondary:
    "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
  destructive:
    "border-transparent bg-red-500 text-white dark:bg-red-900 dark:text-white",
  outline:
    "border-slate-200 text-slate-900 dark:border-slate-800 dark:text-slate-50",
  success:
    "border-transparent bg-green-500 text-white dark:bg-green-600 dark:text-white",
  warning:
    "border-transparent bg-amber-500 text-white dark:bg-amber-600 dark:text-white",
  info: "border-transparent bg-blue-500 text-white dark:bg-blue-600 dark:text-white",
};

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
        "dark:focus:ring-slate-300 dark:focus:ring-offset-slate-950",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps, type BadgeVariant };
