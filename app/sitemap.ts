import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const urlDomain = 'https://learnsmarty.com/';

  return [
    {
      url: urlDomain,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${urlDomain}about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
