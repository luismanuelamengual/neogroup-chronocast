import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { HeroClass } from '@/app/(protected)/(engine)/models/HeroClass'
import { Side } from '@/app/(protected)/(engine)/models/Side'

/** Which heroes can have a card in their deck (docs/PLAN.md, section 4.2). */
export type Restriction =
  | { kind: 'any' }
  | { kind: 'faction'; faction: Faction }
  | { kind: 'class'; heroClass: HeroClass }
  | { kind: 'hero'; heroId: string }
  /** Any hero of a side (Dawn or Eclipse). */
  | { kind: 'side'; side: Side }
