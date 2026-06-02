export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRICING: '/pricing',
  PRICE_STRUCTURE: '/price-structure',
  SERVICES$: (slug: string) => `/services/${slug}`
} as const;
