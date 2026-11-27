import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dormant-sentinel',
  type: 'artifact',
  name: 'Dormant Sentinel',
  text: 'Awaken (1⚡): it leaves the support slots and becomes an Awakened Sentinel ally (6/10). When that ally dies, it comes back as this artifact.',
  flavor: 'It sleeps with one gear open.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  price: 1100,
  cost: 4,
  ability: {
    name: 'Awaken',
    text: 'It becomes an Awakened Sentinel ally (6/10). When that ally dies, it comes back as this artifact.',
    cost: 1,
    resource: 'energy',
    ai: { tags: ['summon'] },
    canActivate(ctx) {
      return ctx.engine.freeSlots(ctx.owner).length === 0 ? 'slotsFull' : null
    },
    activate(ctx) {
      const side = ctx.engine.player(ctx.owner)

      if (ctx.engine.freeSlots(ctx.owner).length === 0) {
        return
      }

      side.artifacts = side.artifacts.filter((card) => card.uid !== ctx.self.uid)
      summonCard(ctx, ctx.owner, 'dormant-sentinel-awakened')
    }
  },
  ai: { value: 5, tags: ['summon'] },
  art: {
    subject:
      'Dormant Sentinel: a giant clockwork knight kneeling motionless, covered in dust, a single gear in its chest faintly turning, bronze accents, steampunk steam era style'
  }
})
