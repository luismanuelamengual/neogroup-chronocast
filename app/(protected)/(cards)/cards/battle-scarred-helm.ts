import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'battle-scarred-helm',
  type: 'armor',
  subtype: 'helm',
  name: 'Battle-Scarred Helm',
  text: 'Every damage your hero takes is 1 lower, but your allies take 1 more.',
  flavor: 'Every dent is a story it survived.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 2,
  durability: 5,
  modifyDamage(ctx, target, amount) {
    if (target.player !== ctx.owner || amount <= 0) {
      return amount
    }

    return target.slot === 'hero' ? Math.max(0, amount - 1) : amount + 1
  },
  ai: { value: 3 },
  art: {
    subject:
      'Battle-Scarred Helm: a single helm made of rusted iron and chains, in a beam of light from above, dramatic backlight, amber accents, warrior style'
  }
})
