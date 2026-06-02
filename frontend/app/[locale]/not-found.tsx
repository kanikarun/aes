import { Metadata } from 'next';

import { TemplateNotFound } from '@/components/templates/exception/not-found';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.'
};

export default async function NotFound() {
  return <TemplateNotFound />;
}
