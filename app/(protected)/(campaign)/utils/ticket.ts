import { createHmac, timingSafeEqual } from 'crypto'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { ApiException } from '@/app/models/ApiException'

/** A ticket is valid for this long after the battle starts. */
export const TICKET_TTL_MS = 6 * 60 * 60 * 1000

/** What the server hands out when a campaign battle starts, and gets back to verify it. */
export interface TicketData {
  userId: number
  heroId: string
  stage: number
  seed: number
  /** The deck as it was when the battle started. */
  deck: DeckList
  issuedAt: number
}

function secret(): string {
  const value = process.env.AUTH_SECRET

  if (!value) {
    throw new Error('AUTH_SECRET is not set')
  }

  return value
}

function sign(payload: string): string {
  return createHmac('sha256', `campaign:${secret()}`).update(payload).digest('base64url')
}

/**
 * A signed ticket for a campaign battle (docs/PLAN.md, section 13.4): the
 * seed comes from the server, so the result can only be claimed for the battle
 * the server dealt, and nothing needs to be stored until it is won.
 */
export function issueTicket(data: TicketData): string {
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url')

  return `${payload}.${sign(payload)}`
}

/** The data of a ticket, if it is genuine, belongs to the player and has not expired. */
export function readTicket(ticket: unknown, userId: number, now: number = Date.now()): TicketData {
  const [payload, signature] = typeof ticket === 'string' ? ticket.split('.') : []
  const expected = payload ? Buffer.from(sign(payload)) : null
  const given = Buffer.from(signature ?? '')

  if (!expected || expected.length !== given.length || !timingSafeEqual(expected, given)) {
    throw new ApiException('errors.invalidTicket')
  }

  const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8')) as TicketData

  if (data.userId !== userId) {
    throw new ApiException('errors.invalidTicket')
  }

  if (now - data.issuedAt > TICKET_TTL_MS) {
    throw new ApiException('errors.ticketExpired')
  }

  return data
}
