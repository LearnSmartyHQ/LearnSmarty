import { sharedMetadata } from '@helper/seo/shared-metadata';
import { sharedViewport } from '@helper/seo/shared-viewport';
import type { Metadata, Viewport } from 'next';
import { Raleway } from 'next/font/google';
import './_styles/globals.css';

const raleway = Raleway({
  // weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = sharedMetadata;
export const viewport: Viewport = sharedViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
    >
      <body
        className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
