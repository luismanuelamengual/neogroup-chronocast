import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patient-sabotage',
  type: 'ability',
  subtype: 'gadget',
  name: 'Patient Sabotage',
  text: 'The enemy weapon loses 1 durability for each artifact of yours. Fast.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, artifactCount(ctx))
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Patient Sabotage: a sword and a shield cracking and rusting apart, in a misty valley, bursting toward the viewer, turquoise accents, hunter style'
  }
})
