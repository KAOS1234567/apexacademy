// src/shared/types/api.ts

/**
 * Standard API response envelope for successful operations.
 */
export interface ApiResponse<T> {
  readonly success: true;
  readonly data: T;
  readonly meta?: ApiMeta;
}

/**
 * Standard API response envelope for failed operations.
 */
export interface ApiError {
  readonly success: false;
  readonly error: {
    readonly code: string;
    readonly message: string;
    readonly details?: Record<string, readonly string[]>;
    readonly requestId?: string;
  };
  readonly meta?: ApiMeta;
}

/**
 * Metadata attached to API responses for tracing and versioning.
 */
export interface ApiMeta {
  readonly timestamp: string;
  readonly version?: string;
  readonly requestId?: string;
  readonly duration?: number;
}

/**
 * Union type representing any API response (success or failure).
 */
export type ApiResult<T> = ApiResponse<T> | ApiError;
