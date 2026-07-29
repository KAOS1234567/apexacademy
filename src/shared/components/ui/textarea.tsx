import * as React from "react";
import { cn } from "@/shared/utils/cn";

type TextAreaResize = "none" | "vertical" | "horizontal" | "both";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: TextAreaResize;
}

const resizeClasses: Record<TextAreaResize, string> = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      resize = "vertical",
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm",
            "ring-offset-white placeholder:text-slate-400",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-500",
            resizeClasses[resize],

            // Default border (no error)
            !error && [
              "border-slate-200 dark:border-slate-800",
              "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300",
              "text-slate-900 dark:text-slate-50",
            ],

            // Error border
            error && [
              "border-red-500 dark:border-red-500",
              "focus-visible:ring-red-500 dark:focus-visible:ring-red-500",
              "text-red-900 dark:text-red-100",
            ],

            className
          )}
          ref={ref}
          rows={rows}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          {...props}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className="text-sm text-red-500 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={`${textareaId}-helper`}
            className="text-sm text-slate-500 dark:text-slate-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea, type TextAreaProps, type TextAreaResize };
