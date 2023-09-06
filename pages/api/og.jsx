import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const imageData = await fetch(
    new URL('/public/assets/og.png', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image alt="librelinks og" width="256" height="256" src={imageData} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}