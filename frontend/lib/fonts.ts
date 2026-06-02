import { Battambang, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = Inter({
  variable: '--odookh-font-sans',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const fontSansKh = Battambang({
  variable: '--odookh-font-sans-kh',
  weight: ['400', '700', '900'],
  subsets: ['khmer']
});

export const fontSansHeading = localFont({
  variable: '--odookh-font-heading-kh',
  src: [
    {
      path: '../public/fonts/Dangrek-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Dangrek-Regular.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/Dangrek-Regular.ttf',
      weight: '900',
      style: 'normal'
    }
  ]
});
