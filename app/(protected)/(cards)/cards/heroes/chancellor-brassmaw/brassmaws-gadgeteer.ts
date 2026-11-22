import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brassmaws-gadgeteer',
  type: 'ally',
  name: "Brassmaw's Gadgeteer",
  text: 'When another Inventor of yours enters: your hero heals 2. When it dies: summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'chancellor-brassmaw' },
  rarity: 'legendary',
  price: 5600,
  cost: 5,
  tribe: 'inventor',
  keywords: ['shield', 'unique'],
  attack: 5,
  health: 13,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'inventor')) {
      healHero(ctx, 2)
    }
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 7, tags: ['heal', 'summon'] },
  art: {
    subject:
      "a steampunk inventor with goggles, the brassmaw's gadgeteer, glaring at the viewer, steampunk steam era style"
  }
})
