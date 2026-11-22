import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { Element } from '@/app/(protected)/(engine)/models/Element'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { PlannedAction } from '@/app/(protected)/(engine)/models/PlannedAction'

/** Small icons of the keywords that matter on the board. */
export const KEYWORD_ICONS: Partial<Record<Keyword, string>> = {
  guardian: '🛡️',
  quick: '⏩',
  charge: '🐎',
  ranged: '🏹',
  agile: '🌀',
  flying: '🪽',
  stealth: '👁️',
  frenzy: '💢',
  poison: '☠️',
  lifesteal: '🩸',
  shield: '🔰',
  thorns: '🌵',
  cleave: '🪓',
  echo: '🔁',
  resurge: '♻️'
}

/** Icons of the elements of damage (on the cards, the floating numbers and the log). */
export const ELEMENT_ICONS: Record<Element, string> = {
  fire: '🔥',
  ice: '❄️',
  lightning: '⚡',
  shadow: '🌑',
  light: '☀️',
  time: '⏳',
  acid: '🧪',
  arcane: '🔮',
  earth: '🪨',
  sonic: '🔊',
  water: '💧',
  wind: '🌪️'
}

export const TYPE_ICONS: Record<CardType, string> = {
  hero: '👑',
  ally: '⚔️',
  ability: '✨',
  weapon: '🗡️',
  armor: '🛡️',
  item: '🧪',
  location: '🏛️',
  trap: '🪤',
  attachment: '🔗',
  artifact: '🏺'
}

export const ACTION_ICONS: Record<PlannedAction['kind'], string> = {
  wait: '⏳',
  sacrifice: '⌛',
  play: '🃏',
  allyAttack: '⚔️',
  heroAttack: '🗡️',
  heroAbility: '✨',
  allyAbility: '🌀',
  move: '↔️'
}
