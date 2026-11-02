import { supabase } from './supabase';
import { getUtmAndReferrer } from './utm';

export interface SubmitPayload {
  email: string;
  role: string;
  looking_for: string;
  locale: string;
}

export type SubmitResult = { status: 'ok' } | { status: 'already' } | { status: 'error' };

export async function submitWaitlist(payload: SubmitPayload): Promise<SubmitResult> {
  try {
    const utm = getUtmAndReferrer();

    const { error } = await supabase.from('waitlist').insert({
      email: payload.email.trim().toLowerCase(),
      role: payload.role,
      looking_for: payload.looking_for,
      locale: payload.locale,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      referrer: utm.referrer,
    });

    if (error) {
      // Postgres unique violation error code
      if (error.code === '23505' || error.message?.includes('duplicate key')) {
        return { status: 'already' };
      }
      console.error('Waitlist submit error:', error);
      return { status: 'error' };
    }

    return { status: 'ok' };
  } catch (err) {
    console.error('Waitlist submit exception:', err);
    return { status: 'error' };
  }
}
