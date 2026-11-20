import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { PlannedAction } from '@/app/(protected)/(engine)/models/PlannedAction'

/** Small icons of the keywords that matter on the board. */
export const KEYWORD_ICONS: Partial<Record<Keyword, string>> = {
  guardian: '🛡️',
  quick: '⚡',
  charge: '🐎',
  ranged: '🏹',
  agile: '🌀',
  flying: '🪽',
  stealth: '👁️',
  frenzy: '🔥',
  poison: '☠️',
  lifesteal: '🩸',
  shield: '🔰',
  thorns: '🌵',
  cleave: '🪓',
  echo: '🔁',
  resurge: '♻️'
}

export const TYPE_ICONS: Record<CardType, string> = {
  hero: '👑',
  ally: '⚔️',
  ability: '✨',
  weapon: '🗡️',
  armor: '🛡️',
  item: '🧪',
  location: '🏛️',
  trap: '🪤'
}

export const ACTION_ICONS: Record<PlannedAction['kind'], string> = {
  wait: '⏳',
  sacrifice: '⌛',
  play: '🃏',
  allyAttack: '⚔️',
  heroAttack: '🗡️',
  heroAbility: '✨',
  move: '↔️'
}
