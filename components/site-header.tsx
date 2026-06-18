import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

type SiteHeaderProps = {
  activePage?: 'home' | 'services';
};

export function SiteHeader({ activePage = 'home' }: SiteHeaderProps) {
  return (
    <>
      <div className="bg-brand-navy text-white py-3 px-4 md:px-6 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <span className="flex items-center gap-2 font-bold text-sm md:text-base text-white">
            <MapPin size={20} className="text-brand-red" /> Serving Valley-Wide Locations
          </span>
          <a
            href="tel:4809456111"
            className="flex items-center gap-2 text-xl md:text-2xl hover:text-red-400 transition-colors font-black tracking-tight text-white"
          >
            <Phone size={24} className="fill-white" /> (480) 945-6111 or (480) 945-6771
          </a>
        </div>
      </div>

      <nav className="bg-surface py-4 md:py-6 px-4 md:px-12 flex justify-between items-center border-b-2 border-border sticky top-0 z-50 transition-colors">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl md:text-4xl font-serif font-black tracking-tighter text-primary leading-none uppercase">
            Hickman
          </span>
          <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] text-brand-red uppercase">
            Plumbing Inc.
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/"
            className={`hidden sm:inline font-black uppercase tracking-tight text-sm md:text-base transition-colors ${
              activePage === 'home' ? 'text-brand-red' : 'text-primary hover:text-brand-red'
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`hidden sm:inline font-black uppercase tracking-tight text-sm md:text-base transition-colors ${
              activePage === 'services' ? 'text-brand-red' : 'text-primary hover:text-brand-red'
            }`}
          >
            Services
          </Link>
          <ThemeToggle />
          <Link
            href="/#booking"
            className="bg-brand-red text-white px-4 py-3 md:px-8 md:py-4 rounded-md font-black hover:bg-brand-navy dark:hover:bg-brand-navy transition-all shadow-md text-sm md:text-lg uppercase tracking-tight"
          >
            Book Online
          </Link>
        </div>
      </nav>
    </>
  );
}