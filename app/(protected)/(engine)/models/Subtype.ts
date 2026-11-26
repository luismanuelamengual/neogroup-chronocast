import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { Faction } from '@/app/(protected)/(engine)/models/Faction'

/**
 * Subtypes (docs/FACTIONS.md): what kind of weapon, armor, ability or
 * attachment a card is. Each one belongs to the faction that favors it (most
 * of its cards are of that faction, a few are a basic neutral set) and some
 * add a rule (a bow makes the hero's attack ranged).
 */
export const SUBTYPES = {
  weapon: [
    // primal
    'bow',
    'crossbow',
    'blowgun',
    'sling',
    'harpoon',
    // bronze
    'sword',
    'axe',
    'spear',
    'mace',
    // arcane
    'staff',
    'wand',
    'orb',
    // clockwork
    'tool',
    // neon
    'energy',
    // void
    'scythe',
    'dagger'
  ],
  armor: ['leather', 'plate', 'shield', 'helm', 'robe', 'circlet', 'exosuit', 'suit', 'shroud'],
  ability: ['instinct', 'tactic', 'spell', 'gadget', 'program', 'ritual'],
  attachment: ['mount', 'charm', 'rune', 'implant', 'curse']
} as const

/** The card types that have a subtype (it is required for them). */
export type SubtypedCardType = keyof typeof SUBTYPES

export type WeaponSubtype = (typeof SUBTYPES.weapon)[number]
export type ArmorSubtype = (typeof SUBTYPES.armor)[number]
export type AbilitySubtype = (typeof SUBTYPES.ability)[number]
export type AttachmentSubtype = (typeof SUBTYPES.attachment)[number]

export type Subtype = WeaponSubtype | ArmorSubtype | AbilitySubtype | AttachmentSubtype

export const SUBTYPED_CARD_TYPES = Object.keys(SUBTYPES) as SubtypedCardType[]

/** Every subtype, in the order they are shown (by card type, then by faction). */
export const ALL_SUBTYPES: Subtype[] = SUBTYPED_CARD_TYPES.flatMap((type) => [...SUBTYPES[type]])

/** The faction that favors each subtype. */
export const SUBTYPE_FACTION: Record<Subtype, Exclude<Faction, 'neutral'>> = {
  bow: 'primal',
  crossbow: 'primal',
  blowgun: 'primal',
  sling: 'primal',
  harpoon: 'primal',
  sword: 'bronze',
  axe: 'bronze',
  spear: 'bronze',
  mace: 'bronze',
  staff: 'arcane',
  wand: 'arcane',
  orb: 'arcane',
  tool: 'clockwork',
  energy: 'neon',
  scythe: 'void',
  dagger: 'void',
  leather: 'primal',
  plate: 'bronze',
  shield: 'bronze',
  helm: 'bronze',
  robe: 'arcane',
  circlet: 'arcane',
  exosuit: 'clockwork',
  suit: 'neon',
  shroud: 'void',
  instinct: 'primal',
  tactic: 'bronze',
  spell: 'arcane',
  gadget: 'clockwork',
  program: 'neon',
  ritual: 'void',
  mount: 'primal',
  charm: 'bronze',
  rune: 'arcane',
  implant: 'neon',
  curse: 'void'
}

/** Weapons whose attacks are ranged (they fly over guardians). */
export const RANGED_WEAPONS: readonly Subtype[] = ['bow', 'crossbow', 'blowgun', 'sling', 'harpoon']

/** Weapons whose attacks are quick (fast speed). */
export const QUICK_WEAPONS: readonly Subtype[] = ['energy']

export function hasSubtype(type: CardType): type is SubtypedCardType {
  return (SUBTYPED_CARD_TYPES as string[]).includes(type)
}

/** Whether a subtype is one of a card type's. */
export function isSubtypeOf(type: CardType, subtype: string): boolean {
  return hasSubtype(type) && (SUBTYPES[type] as readonly string[]).includes(subtype)
}

/** The subtypes a faction favors, by card type. */
export function favoredSubtypes(faction: Faction): Subtype[] {
  return ALL_SUBTYPES.filter((subtype) => SUBTYPE_FACTION[subtype] === faction)
}

/** Whether a weapon's attacks are ranged because of its subtype (a bow, a crossbow...). */
export function isRangedWeapon(card: { subtype?: Subtype }): boolean {
  return card.subtype != null && RANGED_WEAPONS.includes(card.subtype)
}

/** Whether a weapon's attacks are quick because of its subtype (an energy weapon). */
export function isQuickWeapon(card: { subtype?: Subtype }): boolean {
  return card.subtype != null && QUICK_WEAPONS.includes(card.subtype)
}
