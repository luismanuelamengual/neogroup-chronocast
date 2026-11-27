import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'halberd-of-valor',
  type: 'weapon',
  subtype: 'spear',
  name: 'Halberd of Valor',
  text: "Your hero's attacks with it deal 3 more damage to allies.",
  flavor: 'Long reach, longer legend.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  attack: 2,
  durability: 2,
  attackBonus(ctx, attacker, target) {
    return attacker.player === ctx.owner && attacker.slot === 'hero' && target.slot !== 'hero' ? 3 : 0
  },
  ai: { value: 1 },
  art: {
    subject:
      'Halberd of Valor: a single halberd made of carved obsidian, on a workbench with tools, dramatic backlight, teal accents, warrior style'
  }
})
