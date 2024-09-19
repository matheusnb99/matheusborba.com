import { createSearchParamsCache, parseAsString } from "nuqs/server"
// Note: import from 'nuqs/server' to avoid the "use client" directive

const searchParams = {
  category: parseAsString.withDefault("all"),
  view: parseAsString.withDefault("simple"),
  projectId: parseAsString,
}

export const searchParamsCache = createSearchParamsCache(searchParams)
