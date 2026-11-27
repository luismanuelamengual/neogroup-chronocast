import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, isSpell } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crystal-wisp',
  type: 'ally',
  name: 'Crystal Wisp',
  text: 'Channel: when you cast a spell, deal 1 fire damage to a random enemy ally.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 200,
  cost: 5,
  tribe: 'fae',
  keywords: ['shield'],
  attack: 6,
  health: 10,
  onOwnerPlay(ctx, card) {
    if (isSpell(card)) {
      damageRandomAlly(ctx, ctx.opponent, 1, 'fire')
    }
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Crystal Wisp: a wisp with sea-green skin and coral hair and goat legs, sniffing the air, ivory accents, medieval magic order style'
  }
})
