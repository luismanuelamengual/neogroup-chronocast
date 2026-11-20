'use client'

import './index.scss'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton, { GameButtonColor } from '@/app/components/GameButton'

export interface PanelButton {
  label: string
  color: GameButtonColor
  onClick: () => void
  disabled?: boolean
}

interface ActionPanelProps {
  /** The card to show (the selected one, or the one being inspected). */
  cardId: string | null
  hint: string
  buttons: PanelButton[]
}

/** The side panel of the battle: the selected card in big, what to do next, and the buttons of the selection. */
export default function ActionPanel({ cardId, hint, buttons }: ActionPanelProps) {
  return (
    <div className="action-panel">
      {cardId && (
        <div className="action-panel__card">
          <CardView card={getCard(cardId)} />
        </div>
      )}
      <p className="action-panel__hint">{hint}</p>
      {buttons.length > 0 && (
        <div className="action-panel__buttons">
          {buttons.map((button) => (
            <GameButton
              key={button.label}
              size="small"
              color={button.color}
              onClick={button.onClick}
              disabled={button.disabled}
            >
              {button.label}
            </GameButton>
          ))}
        </div>
      )}
    </div>
  )
}
