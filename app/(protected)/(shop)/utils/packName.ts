import { PackDefinition } from '@/app/(protected)/(shop)/data/packs'
import type { MessageKey } from '@/app/i18n/messages'
import { Translator } from '@/app/i18n/translate'

/** The name of a pack in the player's language. */
export function packName(pack: PackDefinition, t: Translator): string {
  return pack.faction
    ? t('shop.packNames.faction', { faction: t(`game.factions.${pack.faction}`) })
    : t(`shop.packNames.${pack.id}` as MessageKey)
}

/** What a pack is good for, in the player's language. */
export function packText(pack: PackDefinition, t: Translator): string {
  return pack.faction
    ? t('shop.packTexts.faction', { faction: t(`game.factions.${pack.faction}`) })
    : t(`shop.packTexts.${pack.id}` as MessageKey)
}
