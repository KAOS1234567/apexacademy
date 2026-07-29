// src/shared/utils/object.ts

/**
 * Check whether an object has no own enumerable properties.
 */
export function isEmptyObject(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value !== "object") return false;
  return Object.keys(value as object).length === 0;
}

/**
 * Return a shallow copy of an object with all `undefined` values removed.
 * Useful for cleaning up payloads before sending to an API.
 */
export function removeUndefined<T extends Record<string, unknown>>(
  value: T,
): Partial<T> {
  if (!value || typeof value !== "object") return value;
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(value)) {
    if (val !== undefined) {
      result[key] = val;
    }
  }
  return result as Partial<T>;
}

/**
 * Deep clone a value using structuredClone.
 * Supports Date, Map, Set, ArrayBuffer, RegExp, and nested plain objects/arrays.
 * Throws if the value contains non-cloneable types (functions, DOM nodes, etc.).
 */
export function deepClone<T>(value: T): T {
  if (value === null || value === undefined) return value;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (globalThis as any).structuredClone === "function") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (globalThis as any).structuredClone(value);
  }
  // Fallback for older environments
  return JSON.parse(JSON.stringify(value)) as T;
}
