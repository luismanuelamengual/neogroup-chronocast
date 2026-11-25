'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import BattleScreen from '@/app/(protected)/(battle)/components/BattleScreen'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import CampaignEnd from '@/app/(protected)/(campaign)/components/CampaignEnd'
import { findCampaign } from '@/app/(protected)/(campaign)/data/campaigns'
import { STAGES_PER_CAMPAIGN } from '@/app/(protected)/(campaign)/data/difficulty'
import { useCampaign } from '@/app/(protected)/(campaign)/hooks/useCampaign'
import { BattleTicket, CampaignSummary } from '@/app/(protected)/(campaign)/models/CampaignDto'
import { describeSetup } from '@/app/(protected)/(campaign)/utils/describeSetup'
import { createCampaignMatch } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { stageKey, storyKey } from '@/app/(protected)/(campaign)/utils/storyKey'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import ActiveDeckChip, { canPlayWith } from '@/app/(protected)/(collection)/components/ActiveDeckChip'
import { ActiveDeck } from '@/app/(protected)/(collection)/models/DeckDto'
import { MAX_AI_LEVEL } from '@/app/(protected)/(engine)/ai/levels'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { findPack } from '@/app/(protected)/(shop)/data/packs'
import { packName } from '@/app/(protected)/(shop)/utils/packName'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useI18n } from '@/app/i18n/I18nProvider'

interface CampaignMapProps {
  campaign: CampaignSummary
  /** The deck every mode plays with (it has to be of the campaign's hero). */
  deck: ActiveDeck | null
}

/**
 * A hero's campaign (docs/PLAN.md, section 14.2): the map of its 10 battles
 * (won, next, locked), the selected battle with its story, rival, adverse
 * situation and rewards, and the battle itself. The match runs in the
 * browser from the seed the server deals; a win is sent to be verified.
 */
export default function CampaignMap({ campaign: initial, deck }: CampaignMapProps) {
  const { t, locale } = useI18n()
  const cardName = useCardName()
  const router = useRouter()
  const api = useCampaign()
  const campaign = findCampaign(initial.heroId)!
  const [progress, setProgress] = useState(initial.stage)
  const [selected, setSelected] = useState(Math.min(initial.stage + 1, STAGES_PER_CAMPAIGN))
  const [ticket, setTicket] = useState<BattleTicket | null>(null)
  const [busy, setBusy] = useState(false)
  const mode = useBattleStore((store) => store.mode)
  const startLocal = useBattleStore((store) => store.startLocal)
  const leave = useBattleStore((store) => store.leave)

  useMusic(ticket && mode !== 'idle' ? null : 'campaign')
  const hero = getCard(campaign.heroId)
  const stage = campaign.stages[selected - 1]
  const unlocked = selected <= progress + 1
  const situation = describeSetup(stage, t, cardName)
  const pack = stage.pack ? findPack(stage.pack) : undefined

  // Leaving the page stops the battle.
  useEffect(() => () => leave(), [leave])

  const play = async (number: number) => {
    if (!canPlayWith(deck, campaign.heroId)) {
      return
    }

    setBusy(true)

    try {
      const dealt = await api.startBattle(campaign.heroId, number)
      const battle = campaign.stages[number - 1]

      setSelected(number)
      setTicket(dealt)
      startLocal(createCampaignMatch(battle, dealt.deck, dealt.seed), dealt.deck, battle.aiLevel)
    } catch {
      // The error is already shown.
    } finally {
      setBusy(false)
    }
  }

  const backToMap = () => {
    leave()
    setTicket(null)
    router.refresh()
  }

  if (ticket && mode !== 'idle') {
    return (
      <BattleScreen
        onChangeHeroes={backToMap}
        music={ticket.stage === STAGES_PER_CAMPAIGN ? 'boss' : 'battle'}
        renderEnd={(state) => (
          <CampaignEnd
            state={state}
            ticket={ticket}
            heroId={campaign.heroId}
            onProgress={(won) => {
              setProgress(won)
              setSelected(Math.min(won + 1, STAGES_PER_CAMPAIGN))
            }}
            onNext={ticket.stage < STAGES_PER_CAMPAIGN ? () => void play(ticket.stage + 1) : undefined}
            onRetry={() => void play(ticket.stage)}
            onMap={backToMap}
          />
        )}
      />
    )
  }

  return (
    <div className={`campaign-map faction-${hero.faction}`}>
      <header>
        <GameButton color="secondary" size="small" href="/campaign">
          ← {t('campaign.title')}
        </GameButton>
        <h1>{t(storyKey(campaign.heroId, 'title'))}</h1>
        <span className="campaign-map__progress">
          {progress >= STAGES_PER_CAMPAIGN
            ? `✓ ${t('campaign.completed')}`
            : t('campaign.progress', { won: progress, total: STAGES_PER_CAMPAIGN })}
        </span>
      </header>
      <p className="campaign-map__intro">
        {t(storyKey(campaign.heroId, progress >= STAGES_PER_CAMPAIGN ? 'ending' : 'intro'))}
      </p>
      <div className="campaign-map__body">
        <ol className="campaign-map__path" aria-label={t('campaign.map')}>
          {campaign.stages.map((item) => {
            const won = item.number <= progress
            const open = item.number <= progress + 1

            return (
              <li key={item.number}>
                <button
                  type="button"
                  className={classNames({
                    won,
                    next: item.number === progress + 1,
                    locked: !open,
                    boss: item.boss,
                    selected: item.number === selected
                  })}
                  onClick={() => setSelected(item.number)}
                >
                  <span className="campaign-map__node">{won ? '✓' : open ? item.number : '🔒'}</span>
                  <span className="campaign-map__label">
                    <small>
                      {item.boss ? `👑 ${t('campaign.boss')}` : t('campaign.battle', { number: item.number })}
                    </small>
                    {t(stageKey(campaign.heroId, item.number, 'name'))}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
        <section className="campaign-map__stage">
          <div className="campaign-map__rival">
            <CardView card={getCard(stage.rival)} />
          </div>
          <div className="campaign-map__details">
            <small>{stage.boss ? `👑 ${t('campaign.boss')}` : t('campaign.battle', { number: stage.number })}</small>
            <h2>{t(stageKey(campaign.heroId, stage.number, 'name'))}</h2>
            <p className="campaign-map__story">{t(stageKey(campaign.heroId, stage.number, 'text'))}</p>
            <dl>
              <dt>{t('campaign.rival')}</dt>
              <dd>{cardName(stage.rival)}</dd>
              <dt>{t('campaign.difficulty')}</dt>
              <dd className="campaign-map__stars" title={`${stage.aiLevel}/${MAX_AI_LEVEL}`}>
                {'★'.repeat(stage.aiLevel)}
                <span>{'★'.repeat(MAX_AI_LEVEL - stage.aiLevel)}</span>
              </dd>
              <dt>{t('campaign.situation')}</dt>
              <dd>
                {situation.length > 0 ? (
                  <ul>
                    {situation.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  t('campaign.noSituation')
                )}
              </dd>
              <dt>{t('campaign.rewards')}</dt>
              <dd>
                {stage.number <= progress ? (
                  <span className="campaign-map__muted">{t('campaign.alreadyWon')}</span>
                ) : (
                  <ul>
                    <li>🪙 {t('campaign.gold', { gold: stage.gold.toLocaleString(locale) })}</li>
                    {pack && <li>🎴 {t('campaign.pack', { pack: packName(pack, t) })}</li>}
                    {stage.boss && (
                      <li>🎁 {t('campaign.rewardCard', { card: getCard(campaign.rewardCardId).name })}</li>
                    )}
                  </ul>
                )}
              </dd>
            </dl>
            {!unlocked ? (
              <p className="campaign-map__muted">🔒 {t('campaign.stageLocked')}</p>
            ) : (
              <div className="campaign-map__start">
                <ActiveDeckChip deck={deck} heroId={campaign.heroId} />
                <GameButton
                  color="primary"
                  size="large"
                  disabled={busy || !canPlayWith(deck, campaign.heroId)}
                  onClick={() => void play(stage.number)}
                >
                  {t('campaign.start')}
                </GameButton>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
