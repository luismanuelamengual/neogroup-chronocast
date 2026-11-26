import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crook-of-the-ancestors',
  type: 'weapon',
  name: 'Crook of the Ancestors',
  text: 'When it is equipped: deal 4 light damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'rare',
  element: 'light',
  price: 420,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Crook of the Ancestors: a single crook made of rough stone and sinew, radiating golden holy light, on cracked stone tiles, framed by drifting embers, lime green accents, mystic healer style'
  }
})
