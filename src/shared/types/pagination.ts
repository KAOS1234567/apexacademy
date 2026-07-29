// src/shared/types/pagination.ts

import type { UUID } from "./common";

/**
 * Input parameters for paginated queries.
 * Supports both offset-based and cursor-based pagination.
 */
export interface PaginationParams {
  readonly page?: number;
  readonly limit?: number;
  readonly cursor?: UUID;
  readonly sortBy?: string;
  readonly sortOrder?: "asc" | "desc";
}

/**
 * Metadata describing the current pagination state.
 */
export interface PaginationMeta {
  readonly total: number;
  readonly page: number;
  readonly limit: number;
  readonly totalPages: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly nextCursor?: UUID | null;
  readonly previousCursor?: UUID | null;
}

/**
 * Paginated response envelope wrapping a list of items.
 */
export interface PaginatedResponse<T> {
  readonly items: readonly T[];
  readonly meta: PaginationMeta;
}

/**
 * Default pagination constants.
 */
export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
} as const;
