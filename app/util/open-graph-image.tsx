import { ImageResponse } from 'next/og';

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: 'small',
    },
    {
      contentType: 'image/png',
      size: { width: 72, height: 72 },
      id: 'medium',
    },
  ];
}

export function generateOpenGraphImage(title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#f3faf7',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
