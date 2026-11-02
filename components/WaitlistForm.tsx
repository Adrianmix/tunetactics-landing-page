'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { submitWaitlist } from '@/lib/submitWaitlist';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function WaitlistForm() {
  const t = useTranslations('form');
  const locale = useLocale();

  const [email, setEmail] = useState('');
  const [role, setRole] = useState('producer');
  const [lookingFor, setLookingFor] = useState('collabs');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'already' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');
    const res = await submitWaitlist({
      email,
      role,
      looking_for: lookingFor,
      locale,
    });

    if (res.status === 'ok') {
      setStatus('success');
    } else if (res.status === 'already') {
      setStatus('already');
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="waitlist-form" className="py-24 relative">
      {/* Glow */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-signal-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface border border-border rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">

          <div className="text-center space-y-3 mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-bone">
              {t('heading')}
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              {t('body')}
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-ice-mint/10 border border-ice-mint/30 rounded-2xl p-6 text-center space-y-3 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-ice-mint mx-auto" />
              <p className="font-display font-bold text-bone text-lg">{t('success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-bone mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('email_placeholder')}
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3.5 text-bone placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-signal-lime transition-colors"
                />
              </div>

              {/* Role select */}
              <div>
                <label className="block text-xs font-medium text-bone mb-2">
                  {t('role')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'producer', label: t('role_options.producer') },
                    { id: 'singer', label: t('role_options.singer') },
                    { id: 'songwriter', label: t('role_options.songwriter') },
                    { id: 'other', label: t('role_options.other') },
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                        role === r.id
                          ? 'bg-signal-lime text-background border-signal-lime font-bold shadow-md'
                          : 'bg-surface-2 text-text-muted border-border hover:text-bone'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Looking for select */}
              <div>
                <label className="block text-xs font-medium text-bone mb-2">
                  {t('looking')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'collabs', label: t('looking_options.collabs') },
                    { id: 'feedback', label: t('looking_options.feedback') },
                    { id: 'paid_work', label: t('looking_options.paid_work') },
                    { id: 'showcasing', label: t('looking_options.showcasing') },
                  ].map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setLookingFor(l.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                        lookingFor === l.id
                          ? 'bg-electric-violet text-bone border-electric-violet font-bold shadow-md'
                          : 'bg-surface-2 text-text-muted border-border hover:text-bone'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status alerts */}
              {status === 'already' && (
                <div className="flex items-center gap-2 text-xs text-hot-coral bg-hot-coral/10 p-3 rounded-xl border border-hot-coral/20">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t('already')}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-xs text-hot-coral bg-hot-coral/10 p-3 rounded-xl border border-hot-coral/20">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t('error')}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-signal-lime text-background font-display font-bold text-sm hover:opacity-95 transition-opacity shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{status === 'submitting' ? t('submitting') : t('submit')}</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
