// src/shared/utils/string.ts

/**
 * Capitalize the first character of a string.
 */
export function capitalize(value: string): string {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Truncate a string to a maximum length, appending an ellipsis if truncated.
 */
export function truncate(
  value: string,
  maxLength: number,
  suffix: string = "...",
): string {
  if (!value || value.length <= maxLength) return value ?? "";
  return value.slice(0, maxLength - suffix.length).trimEnd() + suffix;
}

/**
 * Convert a string into a URL-safe slug.
 * Lowercases, replaces non-alphanumeric characters with hyphens,
 * collapses consecutive hyphens, and trims leading/trailing hyphens.
 */
export function slugify(value: string): string {
  if (!value) return "";
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
