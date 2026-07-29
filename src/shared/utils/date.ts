// src/shared/utils/date.ts

/**
 * Format a date to a localized date string (e.g., "Jan 15, 2026").
 */
export function formatDate(
  date: Date | string | number,
  locale: string = "en-US",
): string {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

/**
 * Format a date to a localized date and time string (e.g., "Jan 15, 2026, 3:45 PM").
 */
export function formatDateTime(
  date: Date | string | number,
  locale: string = "en-US",
): string {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

/**
 * Check whether a given date falls on today's calendar day (local time).
 */
export function isToday(date: Date | string | number): boolean {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) {
    return false;
  }
  const today = new Date();
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  );
}
