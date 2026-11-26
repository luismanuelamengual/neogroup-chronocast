import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-muster',
  type: 'ability',
  subtype: 'spell',
  name: 'Flickering Muster',
  text: 'Summon an Arcane Familiar.',
  flavor: 'Half of them are here. Half are almost here.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
  },
  ai: { value: 2, tags: ['summon'] },
  art: {
    subject:
      'Flickering Muster: a row of empty helmets and spears lit by dawn light, over a stormy battlefield, seen from above, cobalt blue accents, mage style'
  }
})
