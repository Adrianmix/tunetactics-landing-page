import { ImageResponse } from 'next/og';
import { getMessages } from 'next-intl/server';

export const runtime = 'edge';
export const alt = 'TuneTactics — Show your sound. Find your people.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage({ params: { locale } }: { params: { locale: string } }) {
  const messages: any = await getMessages();
  const headline = messages.hero?.headline || 'Show your sound. Find your people.';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#141418',
              borderRadius: '12px',
              border: '1px solid rgba(242, 237, 228, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '8px', height: '24px', background: '#D4F24A', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#F2EDE4', letterSpacing: '-0.03em' }}>
            TuneTactics
          </span>
        </div>

        {/* Center headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#F2EDE4',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
            }}
          >
            {headline}
          </h1>
          <p style={{ fontSize: '24px', color: '#8C887E' }}>
            A community for producers and singers to showcase their work and find collaborators.
          </p>
        </div>

        {/* Bottom 4-color accent bar */}
        <div style={{ display: 'flex', width: '100%', height: '6px', borderRadius: '3px', overflow: 'hidden', gap: '4px' }}>
          <div style={{ flex: 1, background: '#D4F24A' }} />
          <div style={{ flex: 1, background: '#FF6B4A' }} />
          <div style={{ flex: 1, background: '#9B7BFF' }} />
          <div style={{ flex: 1, background: '#5EEAD4' }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
