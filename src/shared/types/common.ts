// src/shared/types/common.ts

/**
 * Universally Unique Identifier (UUID v4 format).
 */
export type UUID = string & { readonly __brand: "UUID" };

/**
 * Represents a value that can be null.
 */
export type Nullable<T> = T | null;

/**
 * ISO 8601 timestamp string.
 */
export type Timestamp = string;

/**
 * Base entity interface for all domain models.
 * Provides common audit fields shared across entities.
 */
export interface BaseEntity {
  readonly id: UUID;
  readonly createdAt: Timestamp;
  readonly updatedAt: Timestamp;
}

/**
 * Soft-deletable entity extension.
 */
export interface SoftDeletableEntity extends BaseEntity {
  readonly deletedAt: Nullable<Timestamp>;
}

/**
 * Entity with an associated tenant (multi-tenancy support).
 */
export interface TenantScopedEntity extends BaseEntity {
  readonly tenantId: UUID;
}
