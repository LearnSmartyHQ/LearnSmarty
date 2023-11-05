import {
  siteDesc, siteKeywords, siteSlogan, siteTitle, siteUrl,
} from '@config/site';
import { twUsername } from '@config/tw';
import type { Metadata } from 'next';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
    // title.absolute can be used to provide a title that ignores title.template set in parent segments.
    absolute: `${siteTitle} - ${siteSlogan}`,
  },
  description: siteDesc,
  applicationName: siteTitle,
  referrer: 'origin-when-cross-origin',
  keywords: siteKeywords,
  // generator: 'Rocket',
  // creator: 'MrAdib',
  // authors: [
  //   {
  //     name: 'MrAdib',
  //     url: 'https://MrAdib.com',
  //   },
  // ],

  // manifest: `${siteUrl}/manifest.json`,
  category: 'learning',
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    siteName: siteTitle,
    // images: [
    //   {
    //     url: `${siteUrl}/og-alt.png`,
    //     width: 1800,
    //     height: 1600,
    //     alt: `${siteTitle} - ${siteSlogan}`,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDesc,
    // siteId: '1467726470533754880',
    creator: twUsername,
    // images: {
    //   url: `${siteUrl}/og.png`,
    //   alt: siteTitle,
    // },
  },
  // icons: {
  //   icon: '/favicon/icon.png',
  //   shortcut: '/favicon/shortcut-icon.png',
  //   apple: '/favicon/apple-icon.png',
  //   other: {
  //     rel: '/favicon/apple-touch-icon-precomposed',
  //     url: '/favicon/apple-touch-icon-precomposed.png',
  //   },
  // },
};
