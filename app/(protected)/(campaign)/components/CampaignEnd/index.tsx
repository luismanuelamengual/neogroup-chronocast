'use client'

import './index.scss'
import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import { useCampaign } from '@/app/(protected)/(campaign)/hooks/useCampaign'
import { BattleReward, BattleTicket } from '@/app/(protected)/(campaign)/models/CampaignDto'
import { PLAYER } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { storyKey } from '@/app/(protected)/(campaign)/utils/storyKey'
import CardSpotlight from '@/app/(protected)/(cards)/components/CardSpotlight'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import FlipCard from '@/app/(protected)/(cards)/components/FlipCard'
import { shines, useFlipReveal } from '@/app/(protected)/(cards)/hooks/useFlipReveal'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { RARITIES } from '@/app/(protected)/(engine)/models/Rarity'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { findPack } from '@/app/(protected)/(shop)/data/packs'
import { packName } from '@/app/(protected)/(shop)/utils/packName'
import GameButton from '@/app/components/GameButton'
import { useI18n } from '@/app/i18n/I18nProvider'

interface CampaignEndProps {
  state: MatchState
  ticket: BattleTicket
  heroId: string
  /** The battles won after a verified first win. */
  onProgress: (progress: number) => void
  /** The next battle (none after the boss). */
  onNext?: () => void
  onRetry: () => void
  onMap: () => void
  onShowLog: () => void
}

/**
 * The end of a campaign battle. A win is sent to the server, which plays the
 * battle again and pays the first-win rewards (docs/PLAN.md, section 13.4):
 * gold, the pack's cards and, after the boss, the exclusive card. A defeat
 * offers to try again.
 */
export default function CampaignEnd({
  state,
  ticket,
  heroId,
  onProgress,
  onNext,
  onRetry,
  onMap,
  onShowLog
}: CampaignEndProps) {
  const { t, locale } = useI18n()
  const api = useCampaign()
  const record = useBattleStore((store) => store.record)
  const winner = state.result?.winner
  const outcome = winner == null ? 'draw' : winner === PLAYER ? 'victory' : 'defeat'
  const [reward, setReward] = useState<BattleReward | null>(null)
  const [status, setStatus] = useState<'idle' | 'verifying' | 'failed'>(outcome === 'victory' ? 'verifying' : 'idle')
  const sent = useRef(false)
  const verify = useCallback(async () => {
    setStatus('verifying')

    try {
      const result = await api.finishBattle(ticket.ticket, record)

      setReward(result)
      setStatus('idle')
      onProgress(result.progress)
    } catch {
      setStatus('failed')
    }
  }, [api, ticket, record, onProgress])

  useEffect(() => {
    if (outcome === 'victory' && !sent.current) {
      sent.current = true
      void verify()
    }
  }, [outcome, verify])

  const pack = reward?.pack ? findPack(reward.pack.id) : undefined
  const packCards = [...(reward?.pack?.cards ?? [])].sort(
    (a, b) => RARITIES.indexOf(getCard(a).rarity) - RARITIES.indexOf(getCard(b).rarity)
  )
  const completed = !!reward?.rewardCardId

  return (
    <div className="campaign-end">
      <div className={classNames('campaign-end__panel', outcome)}>
        <h2>{completed ? t('campaign.end.completed') : t(`campaign.end.${outcome}`)}</h2>
        <p>
          {state.result && t(`battle.end.${state.result.reason}`)} · {t('battle.end.phases', { count: state.phase })}
        </p>
        {completed && <p className="campaign-end__story">{t(storyKey(heroId, 'ending'))}</p>}
        {status === 'verifying' && <p className="campaign-end__note">⏳ {t('campaign.end.verifying')}</p>}
        {status === 'failed' && (
          <div className="campaign-end__note">
            <p>⚠️ {t('campaign.end.verifyFailed')}</p>
            <GameButton color="ghost" size="small" onClick={() => void verify()}>
              {t('campaign.end.tryAgain')}
            </GameButton>
          </div>
        )}
        {reward && !reward.firstWin && <p className="campaign-end__note">{t('campaign.end.noReward')}</p>}
        {reward?.firstWin && (
          <div className="campaign-end__rewards">
            <span className="gold">🪙 +{reward.gold.toLocaleString(locale)}</span>
            {reward.rewardCardId && (
              <div className="campaign-end__exclusive">
                <strong>🎁 {t('campaign.end.newCard')}</strong>
                <div className="campaign-end__card">
                  <CardView card={getCard(reward.rewardCardId)} />
                </div>
              </div>
            )}
            {pack && <RewardPack name={packName(pack, t)} cards={packCards} />}
          </div>
        )}
        <div className="campaign-end__buttons">
          {outcome === 'victory' ? (
            onNext &&
            status === 'idle' && (
              <GameButton color="gold" onClick={onNext}>
                {t('campaign.end.next')}
              </GameButton>
            )
          ) : (
            <GameButton color="gold" onClick={onRetry}>
              {t('campaign.end.retry')}
            </GameButton>
          )}
          <GameButton color="cyan" onClick={onMap} disabled={status === 'verifying'}>
            {t('campaign.end.map')}
          </GameButton>
          <GameButton color="ghost" onClick={onShowLog}>
            📜 {t('battle.log')}
          </GameButton>
        </div>
      </div>
    </div>
  )
}

/** Pause between two cards when "Flip them all" turns them (ms). */
const FLIP_STEP = 280

/** The cards of the pack won, dealt face down to turn one by one (or all at once). */
function RewardPack({ name, cards }: { name: string; cards: string[] }) {
  const { t } = useI18n()
  const { flipped, flip, revealAll, revealing, done, spotlight, open, close } = useFlipReveal(cards, FLIP_STEP)

  return (
    <div className="campaign-end__pack">
      <strong>🎴 {t('campaign.end.packCards', { pack: name })}</strong>
      <div className="campaign-end__cards">
        {cards.map((cardId, index) => (
          <FlipCard
            key={index}
            className="campaign-end__mini"
            rarity={getCard(cardId).rarity}
            shine={shines(cardId)}
            flipped={flipped[index]}
            onFlip={() => flip(index)}
            onOpen={() => open(index)}
            label={t('shop.opening.tap')}
            openLabel={getCard(cardId).name}
          >
            <span className="campaign-end__zoom">
              <CardView card={getCard(cardId)} />
            </span>
          </FlipCard>
        ))}
      </div>
      {spotlight != null && (
        <CardSpotlight cardId={cards[spotlight]} shine={shines(cards[spotlight])} onClose={close} />
      )}
      {!done && (
        <GameButton color="cyan" size="small" disabled={revealing} onClick={revealAll}>
          {t('shop.opening.revealAll')}
        </GameButton>
      )}
    </div>
  )
}
