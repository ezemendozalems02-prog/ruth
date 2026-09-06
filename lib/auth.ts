import 'server-only'
import { createHmac, timingSafeEqual } from 'crypto'

export const ADMIN_COOKIE_NAME = 'admin_session'
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 días

function sign(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) throw new Error('Falta ADMIN_SESSION_SECRET en el entorno')
  return createHmac('sha256', secret).update(value).digest('hex')
}

export function createSessionValue() {
  const expires = Date.now() + ADMIN_COOKIE_MAX_AGE * 1000
  const payload = `admin.${expires}`
  return `${payload}.${sign(payload)}`
}

export function verifySessionValue(value: string | undefined | null): boolean {
  if (!value) return false
  const parts = value.split('.')
  if (parts.length !== 3) return false
  const [role, expiresStr, sig] = parts
  const payload = `${role}.${expiresStr}`
  const expected = sign(payload)
  const a = Buffer.from(expected)
  const b = Buffer.from(sig)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false
  const expires = Number(expiresStr)
  if (!Number.isFinite(expires) || Date.now() > expires) return false
  return role === 'admin'
}
