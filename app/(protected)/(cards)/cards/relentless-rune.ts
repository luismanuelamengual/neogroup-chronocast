import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'relentless-rune',
  type: 'attachment',
  subtype: 'rune',
  name: 'Relentless Rune',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  keywords: ['guardian'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Relentless Rune: an enchanted rune made of crystal and silver filigree, in a beam of light from above, dramatic backlight, ivory accents, warrior style'
  }
})
