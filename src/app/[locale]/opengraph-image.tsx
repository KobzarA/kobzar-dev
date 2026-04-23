import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'P&B Kobzar Dev | Full-Stack Development & DevOps Engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ locale?: string | string[] }>;
}) {
  await params;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #000000, #0a0a0a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          P&B <span style={{ color: '#34d399', marginLeft: 16 }}>Kobzar Dev</span>
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Full-Stack Development & DevOps Engineering
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#71717a',
            marginTop: 40,
            display: 'flex',
            gap: 40,
          }}
        >
          <span>7+ Years</span>
          <span>•</span>
          <span>100+ Projects</span>
          <span>•</span>
          <span>30+ Technologies</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
