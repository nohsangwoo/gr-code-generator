import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'LUDGI QR Code Generator - 무료 온라인 QR 코드 생성 도구'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="120" height="120" rx="24" fill="white" fillOpacity="0.2" />
            <rect x="20" y="20" width="30" height="30" fill="white" />
            <rect x="70" y="20" width="30" height="30" fill="white" />
            <rect x="20" y="70" width="30" height="30" fill="white" />
            <rect x="70" y="70" width="10" height="10" fill="white" />
            <rect x="90" y="70" width="10" height="10" fill="white" />
            <rect x="70" y="90" width="10" height="10" fill="white" />
            <rect x="90" y="90" width="10" height="10" fill="white" />
            <rect x="30" y="30" width="10" height="10" fill="#764ba2" />
            <rect x="80" y="30" width="10" height="10" fill="#764ba2" />
            <rect x="30" y="80" width="10" height="10" fill="#764ba2" />
          </svg>
        </div>
        
        <h1
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            textAlign: 'center',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          LUDGI QR Generator
        </h1>
        
        <p
          style={{
            fontSize: 28,
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '20px 0 40px 0',
            textAlign: 'center',
          }}
        >
          무료 온라인 QR 코드 생성 도구
        </p>
        
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginTop: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: 12,
            }}
          >
            <span style={{ fontSize: 24, color: 'white' }}>🔗</span>
            <span style={{ fontSize: 20, color: 'white' }}>URL QR</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: 12,
            }}
          >
            <span style={{ fontSize: 24, color: 'white' }}>📶</span>
            <span style={{ fontSize: 20, color: 'white' }}>Wi-Fi QR</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: 12,
            }}
          >
            <span style={{ fontSize: 24, color: 'white' }}>🎨</span>
            <span style={{ fontSize: 20, color: 'white' }}>Custom Colors</span>
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.8)' }}>
            Powered by
          </span>
          <span style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            LUDGI Inc.
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}