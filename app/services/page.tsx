import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Star,
  Flame,
  Droplets,
  ChefHat,
  Waves,
  Church,
  Stethoscope,
  UtensilsCrossed,
  Hospital,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Services | Hickman Plumbing Inc.',
  description:
    'Southwest Preferred List plumbing services including gas repairs, hot water tanks, stoves, BBQ, and pools. Trusted by churches, clinics, restaurants, and hospitals.',
};

const southwestServices = [
  {
    title: 'Gas Repairs',
    desc: 'Safe, code-compliant gas line repairs for homes and commercial properties.',
    icon: Flame,
  },
  {
    title: 'Hot Water Tanks',
    desc: 'Installation, repair, and replacement for traditional tank water heaters.',
    icon: Droplets,
  },
  {
    title: 'Stoves',
    desc: 'Gas stove hookups, conversions, and plumbing connections done right.',
    icon: ChefHat,
  },
  {
    title: 'BBQ & Pools',
    desc: 'Gas lines for outdoor kitchens, BBQs, and pool heater plumbing systems.',
    icon: Waves,
  },
];

const previousCustomers = [
  {
    title: 'Churches',
    desc: 'Plumbing installs and repairs for places of worship across the Valley.',
    icon: Church,
  },
  {
    title: 'Medical & Dental Clinics',
    desc: 'Reliable plumbing for healthcare facilities that cannot afford downtime.',
    icon: Stethoscope,
  },
  {
    title: 'Restaurants',
    desc: 'Commercial kitchen plumbing, grease lines, and emergency repair service.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Hospitals (Honor Health)',
    desc: 'Large-scale institutional work trusted by Honor Health and hospital systems.',
    icon: Hospital,
  },
  {
    title: 'Tenant Improvements',
    desc: 'Build-outs and remodel plumbing for offices, retail, and commercial tenants.',
    icon: Building2,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-page text-primary font-sans min-h-screen transition-colors">
      <SiteHeader activePage="services" />

      <section className="bg-section py-10 md:py-16 px-4 md:px-12 border-b border-border transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <Star size={20} className="text-brand-red fill-brand-red" />
            <span className="text-base md:text-lg font-black uppercase tracking-widest text-brand-red">
              Commercial & Residential
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-black mb-6 md:mb-8 text-primary leading-tight uppercase">
            Our <span className="text-brand-red">Services</span>
          </h1>

          <p className="text-lg md:text-2xl text-body mb-8 md:mb-10 leading-relaxed font-medium max-w-4xl">
            From Southwest Gas preferred work to large commercial projects, Hickman Plumbing
            delivers dependable craftsmanship backed by decades of hands-on experience.
          </p>

          <a
            href="tel:4809456111"
            className="inline-flex bg-brand-red text-white px-8 py-5 md:px-10 md:py-6 rounded-md font-black text-xl md:text-2xl items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl"
          >
            <Phone size={28} /> (480) 945-6111 or (480) 945-6771
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base md:text-lg font-black uppercase tracking-[0.3em] text-brand-red mb-4">
            Southwest Preferred List
          </p>
          <h2 className="text-3xl md:text-6xl font-serif font-black text-primary uppercase italic">
            We Are on the Southwest Preferred List
          </h2>
          <p className="text-lg md:text-xl text-muted mt-6 font-bold uppercase tracking-widest">
            Gas Repairs · Hot Water Tanks · Stoves · BBQ & Pools
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {southwestServices.map((item) => (
            <div key={item.title} className="card-surface p-8 md:p-10">
              <item.icon size={48} className="text-brand-red mb-6" />
              <h3 className="text-2xl md:text-3xl font-serif font-black mb-4 uppercase text-primary">{item.title}</h3>
              <p className="text-lg text-body leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy text-white py-16 md:py-24 px-4 md:px-6 border-y-8 border-brand-red">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-serif font-black uppercase underline decoration-brand-red decoration-4 md:decoration-8 underline-offset-8">
              Previous Customers
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mt-6 font-medium italic max-w-3xl mx-auto">
              Trusted by organizations across the Valley. Add your business name or logo below as
              we continue to grow our portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {previousCustomers.map((item) => (
              <div
                key={item.title}
                className="bg-[#243652] dark:bg-[#1a2738] border-4 border-brand-red p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(178,34,52,1)] flex flex-col"
              >
                <item.icon size={40} className="text-brand-red mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-black mb-3 uppercase">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-300 font-medium mb-6 flex-grow">{item.desc}</p>
                <div className="min-h-[80px] border-2 border-dashed border-gray-500 dark:border-gray-600 rounded-lg flex items-center justify-center bg-brand-navy/50">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Customer showcase
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-lg md:text-xl font-black uppercase">
            <CheckCircle2 size={24} className="text-brand-red" /> Licensed, Bonded & Insured
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6 text-center bg-page transition-colors">
        <div className="max-w-3xl mx-auto card-accent p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-primary mb-4 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl font-bold text-muted italic mb-8">
            Schedule service online or call us directly.
          </p>
          <Link
            href="/#booking"
            className="inline-block bg-brand-navy text-white px-8 py-5 md:px-12 md:py-6 rounded-lg font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-brand-red transition-all"
          >
            Book Online
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}