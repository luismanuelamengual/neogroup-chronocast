import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brave-fortune-teller',
  type: 'ally',
  name: 'Brave Fortune Teller',
  text: 'After it takes damage: your allies heal 2.',
  flavor: 'She read her own death and laughed at it.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  attack: 5,
  health: 7,
  onDamaged(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Brave Fortune Teller: an athletic middle-aged lizardfolk man with ruddy scales, heavy stubble and a jeweled brow piercing, wearing a feathered cap, dressed in a 1920s pinstripe suit with a tattered cape, holding a crystal ball swirling with images, with wide-eyed wonder, amber accents, warrior style'
  }
})
