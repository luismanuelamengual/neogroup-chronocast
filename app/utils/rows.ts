/**
 * A column of a raw row of `DB.table(...)`. PostgreSQL folds unquoted
 * identifiers to lower case (`heroId` comes back as `heroid`) while SQLite
 * keeps them as written, so raw rows are read through this helper. Entities
 * don't need it: neorm maps their columns either way.
 */
export function column(row: Record<string, unknown>, name: string): unknown {
  return name in row ? row[name] : row[name.toLowerCase()]
}
