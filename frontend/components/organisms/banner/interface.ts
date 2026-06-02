import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface BannerProps {
  variant: 'Default' | 'Service';
  bgColor: 'Purple' | 'White';
  tagline?: string;
  title: string;
  content: string;
  image: string | StaticImport;
  buttons?: Array<{
    text: string;
    link: string;
  }>;
}