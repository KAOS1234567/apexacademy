// src/lib/constants/routes.ts

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PLAYERS: "/players",
  TEAMS: "/teams",
  TRAINING: "/training",
  MATCHES: "/matches",
  ATTENDANCE: "/attendance",
  SETTINGS: "/settings",
} as const;

export type RouteKey = keyof typeof ROUTES;
