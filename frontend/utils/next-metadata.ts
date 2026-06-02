import { siteConfig } from '@/config/site';
import { getStrapiMedia, Image } from '@/strapi';

interface Metadata {
  metaTitle: string;
  metaDescription?: string;
  metaImage?: Image;
  keywords?: string;
}

export function getMetadata(metadata: Metadata) {
  const { metaTitle, metaDescription, metaImage } = metadata;
  const { name, url, ogImage } = siteConfig;

  const title = metaTitle || name;
  const image = getStrapiMedia(metaImage) || ogImage;
  const description = metaDescription || '';
  const keywords = metadata.keywords?.split('\n') || siteConfig.keywords;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image || ogImage,
          width: 1200,
          height: 630
        }
      ],
      siteName: name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: image || ogImage,
          width: 1200,
          height: 630
        }
      ]
    }
  };
}
