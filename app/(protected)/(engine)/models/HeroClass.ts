/** Classes of the heroes: weapons, armor and abilities are usually restricted to one. */
export const HERO_CLASSES = ['warrior', 'mage', 'hunter', 'mystic'] as const

export type HeroClass = (typeof HERO_CLASSES)[number]
