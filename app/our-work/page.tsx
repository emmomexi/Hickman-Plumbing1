import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PortfolioBento } from '@/components/bento/portfolio-bento';

export const metadata: Metadata = {
  title: 'Our Work | Hickman Plumbing Inc.',
  description:
    'Explore Hickman Plumbing portfolio — commercial, residential, and institutional projects across the Valley since 1986.',
};

export default function OurWorkPage() {
  return (
    <div className="bg-page text-primary font-sans min-h-screen transition-colors">
      <SiteHeader activePage="our-work" />
      <PortfolioBento />
      <SiteFooter />
    </div>
  );
}