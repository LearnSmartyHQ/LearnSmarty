import { projectConfig } from '@/backend/config';
import type { Metadata } from 'next';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const sharedMetadata: Metadata = {
  metadataBase: new URL(projectConfig.siteUrl),
  title: {
    template: `%s | ${projectConfig.siteTitle}`,
    default: projectConfig.siteTitle,
    // title.absolute can be used to provide a title that ignores title.template set in parent segments.
    absolute: `${projectConfig.siteTitle} - ${projectConfig.siteSlogan}`,
  },
  description: projectConfig.siteDesc,
  applicationName: projectConfig.siteTitle,
  referrer: 'origin-when-cross-origin',
  keywords: projectConfig.siteKeywords,
  // generator: 'Rocket',
  // creator: 'MrAdib',
  // authors: [
  //   {
  //     name: 'MrAdib',
  //     url: 'https://MrAdib.com',
  //   },
  // ],

  // manifest: `${projectConfig.siteUrl}/manifest.json`,
  category: 'learning',
  openGraph: {
    title: projectConfig.siteTitle,
    description: projectConfig.siteDesc,
    url: projectConfig.siteUrl,
    siteName: projectConfig.siteTitle,
    // images: [
    //   {
    //     url: `${projectConfig.siteUrl}/og-alt.png`,
    //     width: 1800,
    //     height: 1600,
    //     alt: `${projectConfig.siteTitle} - ${siteSlogan}`,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: projectConfig.siteTitle,
    description: projectConfig.siteDesc,
    // siteId: '1467726470533754880',
    creator: projectConfig.twUsername,
    // images: {
    //   url: `${projectConfig.siteUrl}/og.png`,
    //   alt: projectConfig.siteTitle,
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
