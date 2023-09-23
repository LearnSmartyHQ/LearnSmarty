import type { Metadata } from 'next';

const siteUrl = 'https://learnsmarty.com/';
const siteTitle = 'Learn Smarty';
const siteSlogan = 'Learn Smarter, Not Harder.';
const siteDesc = `AI-powered, personalized flashcard learning with the Leitner method for efficient education. ${siteSlogan} 😎 ${siteTitle} 🆒`;
const siteKeywords = [
  'learn',
  'LearnSmarty',
  'Leitner',
  'flashcard',
  'flashcard learning',
  'AI learning',
  'Leitner Flashcard',
  'Leitner 504',
];

const twUsername = '@MrAdib';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const sharedMetadata: Metadata = {
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
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  // manifest: `${siteUrl}manifest.json`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'learning',
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    siteName: siteTitle,
    // images: [
    //   {
    //     url: `${siteUrl}og-alt.png`,
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
