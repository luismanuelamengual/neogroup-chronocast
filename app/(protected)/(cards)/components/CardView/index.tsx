'use client'

import './index.scss'
import classNames from 'classnames'
import { ReactNode, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { ELEMENT_ICONS, SIDE_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { useCardArt } from '@/app/(protected)/(cards)/stores/cardArt'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { Element } from '@/app/(protected)/(engine)/models/Element'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { isQuickWeapon, isRangedWeapon } from '@/app/(protected)/(engine)/models/Subtype'
import { cardSide } from '@/app/(protected)/(engine)/utils/deckRules'
import { translateCard } from '@/app/i18n/cards'
import { useI18n } from '@/app/i18n/I18nProvider'
import { Translator } from '@/app/i18n/translate'

const TYPE_GLYPHS: Record<CardDefinition['type'], string> = {
  hero: '👑',
  ally: '⚔️',
  ability: '✨',
  weapon: '🗡️',
  armor: '🛡️',
  item: '🧪',
  location: '🏛️',
  trap: '🪤',
  attachment: '🔗',
  artifact: '🏺'
}

/**
 * "☀️ Ally · Beast - Primal": the side's icon and the type, with the tribe of an ally or the subtype of
 * the rest (card texts name them: "your Beasts", "your spells"), then the faction, each one unless it
 * is neutral. One line of fixed height: a long one ends in an ellipsis.
 */
function typeLine(card: CardDefinition, t: Translator): ReactNode {
  const side = cardSide(card)
  const faction = card.faction !== 'neutral' ? ` - ${t(`game.factions.${card.faction}`)}` : ''

  return (
    <>
      {side === 'dawn' && <span className="card-view__side side-dawn">{SIDE_ICONS.dawn}</span>}
      {side === 'eclipse' && (
        // Drawn in SVG so it stays round at any zoom (the 🌑 emoji sits off center and hides on dark frames).
        <svg
          className="card-view__side side-eclipse"
          viewBox="0 0 16 16"
          role="img"
          aria-label={t('game.sides.eclipse')}
        >
          <defs>
            <radialGradient id="card-view-moon" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#5b5470" />
              <stop offset="100%" stopColor="#1f1a2e" />
            </radialGradient>
          </defs>
          <circle cx="8" cy="8" r="7.5" fill="white" opacity="0.55" />
          <circle cx="8" cy="8" r="6.5" fill="white" />
          <circle cx="8" cy="8" r="4.5" fill="url(#card-view-moon)" />
        </svg>
      )}
      {t(`game.types.${card.type}`)}
      {card.tribe && ` · ${t(`game.tribes.${card.tribe}`)}`}
      {!card.tribe && card.subtype && ` · ${t(`game.subtypes.${card.subtype}`)}`}
      {faction}
    </>
  )
}

/** The names of some elements, with their icons: "🔥 Fire, ❄️ Ice". */
function elementList(elements: Element[], t: Translator): string {
  return elements.map((element) => `${ELEMENT_ICONS[element]} ${t(`game.elements.${element}`)}`).join(', ')
}

/** The keywords line of a card, e.g. "🔥 Fire. Guardian. Thorns 4. Resists: ❄️ Ice." */
function keywordsLine(card: CardDefinition, t: Translator): string {
  // Abilities and the rest say it in their text; allies and weapons attack with it.
  const attacks = card.type === 'ally' || card.type === 'weapon'
  const element = card.element && attacks ? [`${elementList([card.element], t)}.`] : []
  // A bow and its kin attack at range, an energy weapon quick: shown like their keywords.
  const implied: Keyword[] = [
    ...(isRangedWeapon(card) ? (['ranged'] as const) : []),
    ...(isQuickWeapon(card) ? (['quick'] as const) : [])
  ]
  const keywords = [...new Set([...implied, ...(card.keywords ?? [])])].map(
    (keyword) => `${t(`game.keywords.${keyword}`)}${keyword === 'thorns' ? ` ${card.thorns}` : ''}.`
  )
  const resist = card.resist?.length ? [`${t('game.resists', { elements: elementList(card.resist, t) })}.`] : []
  const weak = card.weak?.length ? [`${t('game.weakTo', { elements: elementList(card.weak, t) })}.`] : []

  return [...element, ...keywords, ...resist, ...weak].join(' ')
}

interface CardViewProps {
  card: CardDefinition
  /** URL of the illustration (default: the card's own, processed by `yarn art`; a placeholder while there is none). */
  art?: string
  /**
   * Drawn small (a grid of cards, the battle board): the small copy of the illustration, a third of the
   * bytes to download and of the memory to hold it. The full one if the small copy is not there.
   */
  thumb?: boolean
}

/**
 * A card, drawn from its definition: vivid frame in the color of its faction,
 * cost, rarity gem, illustration, name, type line, rules text and stats.
 * Its texts in the player's language when the card has a translation
 * (app/i18n/cards), in English otherwise.
 */
/** Font sizes (px, at zoom 1) of the rules box and the name: they start at the largest and shrink until the text fits. */
const TEXT_SIZE = { max: 12, min: 6.5 }
const NAME_SIZE = { max: 17, min: 10 }
const SIZE_STEP = 0.5
/** Below this size (px) the flavor text is dropped to give the rules more room. */
const FLAVOR_MIN_SIZE = 11
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect
/**
 * The sizes already found, by card, language and area: every card has its areas in the same place and of
 * the same size, so a card measured once fits the same everywhere (the zoom scales the box and the text
 * alike). A grid of cards (shop, collection) then measures each card once per visit, not on every mount.
 */
const fitCache = new Map<string, { size: number; flavor: boolean }>()

/**
 * Shrinks the letters of an element of fixed size until its content fits:
 * every card has its areas in the same place and of the same size, and a long
 * text is set smaller instead of growing its box.
 */
function useFitText(ref: RefObject<HTMLElement | null>, size: { max: number; min: number }, key: string) {
  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const cacheKey = `${size.max}:${key}`
    const flavor = () => element.querySelector<HTMLElement>('.card-view__flavor')

    const apply = (fitted: { size: number; flavor: boolean }) => {
      element.style.fontSize = `${fitted.size}px`
      const node = flavor()

      if (node) {
        node.style.display = fitted.flavor ? '' : 'none'
      }
    }

    const fit = () => {
      const node = flavor()
      const overflows = () =>
        element.scrollHeight > element.clientHeight + 1 || element.scrollWidth > element.clientWidth + 1

      // The largest size, in steps, that fits: a binary search (a handful of layouts instead of one per step).
      const shrink = () => {
        const steps = Math.round((size.max - size.min) / SIZE_STEP)
        let low = 0
        let high = steps

        element.style.fontSize = `${size.max}px`

        if (!overflows()) {
          return size.max
        }

        while (low < high) {
          const middle = Math.ceil((low + high) / 2)

          element.style.fontSize = `${size.min + middle * SIZE_STEP}px`

          if (overflows()) {
            high = middle - 1
          } else {
            low = middle
          }
        }

        const current = size.min + low * SIZE_STEP

        element.style.fontSize = `${current}px`

        return current
      }

      if (node) {
        node.style.display = ''
      }

      let current = shrink()
      let keepFlavor = true

      // The flavor text is the first to go when the rules need the room.
      if (current < FLAVOR_MIN_SIZE && node) {
        node.style.display = 'none'
        keepFlavor = false
        current = shrink()
      }

      // Kept only once the display font is in: measured with the fallback font, it would be off.
      if (typeof document === 'undefined' || !document.fonts || document.fonts.status === 'loaded') {
        fitCache.set(cacheKey, { size: current, flavor: keepFlavor })
      }
    }

    const cached = fitCache.get(cacheKey)

    if (cached) {
      apply(cached)

      return
    }

    fit()
    // The display font may arrive later and take more room.
    document.fonts?.ready.then(fit)
  }, [ref, size, key])
}

export default function CardView({ card: original, art, thumb = false }: CardViewProps) {
  const { t, locale } = useI18n()
  const ownArt = useCardArt(original.id, thumb)
  const fullArt = useCardArt(original.id)
  const card = translateCard(original, locale)
  const keywords = keywordsLine(card, t)
  const speed = card.speed ?? card.ability?.speed
  const image = art ?? ownArt
  // Abilities, items, locations and traps have no stats: without the row, the text keeps clear of the bottom edge.
  const hasStats = card.attack != null || card.armor != null || card.durability != null || card.health != null
  // An ally or artifact with an ability has more to say: no flavor text.
  const allyAbility = !!card.ability && card.type !== 'hero'
  const textRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useFitText(textRef, TEXT_SIZE, `${locale}:${card.id}`)
  useFitText(nameRef, NAME_SIZE, `${locale}:${card.id}`)

  return (
    <article
      className={classNames('card-view', `faction-${card.faction}`, `rarity-${card.rarity}`, `type-${card.type}`, {
        'full-art': !!image,
        'with-stats': hasStats
      })}
    >
      <div className="card-view__art">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={card.name}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              // No small copy yet (an image processed before there were thumbs): the full one.
              if (!art && thumb && fullArt && !event.currentTarget.src.endsWith(fullArt)) {
                event.currentTarget.src = fullArt
              }
            }}
          />
        ) : (
          <span className="card-view__placeholder" title={card.art.subject}>
            {TYPE_GLYPHS[card.type]}
          </span>
        )}
      </div>

      {card.type !== 'hero' && <span className="card-view__cost">{card.cost}</span>}
      <span className="card-view__gem" title={t(`game.rarities.${card.rarity}`)} />
      {speed && speed !== 'normal' && <span className="card-view__speed">{t(`game.speeds.${speed}`)}</span>}

      <h3 className="card-view__name" ref={nameRef}>
        {card.name}
      </h3>
      <p className="card-view__type">{typeLine(card, t)}</p>

      <div className="card-view__text" ref={textRef}>
        {keywords && <p className="card-view__keywords">{keywords}</p>}
        {/* A hero's text repeats its ability; an ally's text is apart from it. */}
        {card.text && (!card.ability || card.type !== 'hero') && <p>{card.text}</p>}
        {card.ability && (
          <p className="card-view__ability">
            <strong>
              {card.ability.name} ({card.type === 'hero' || card.ability.resource === 'energy' ? '⚡' : ''}
              {card.ability.cost}):
            </strong>{' '}
            {card.ability.text}
          </p>
        )}
        {card.flavor && !allyAbility && <p className="card-view__flavor">{card.flavor}</p>}
      </div>

      {hasStats && (
        <div className="card-view__stats">
          {card.attack != null && <span className="card-view__stat card-view__stat--attack">{card.attack}</span>}
          {card.armor != null && <span className="card-view__stat card-view__stat--armor">{card.armor}</span>}
          <span className="card-view__spacer" />
          {card.durability != null && (
            <span className="card-view__stat card-view__stat--durability">{card.durability}</span>
          )}
          {card.health != null && <span className="card-view__stat card-view__stat--health">{card.health}</span>}
        </div>
      )}
    </article>
  )
}
