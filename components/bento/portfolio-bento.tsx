'use client';

import {
  Award,
  Building2,
  Calendar,
  Church,
  Droplets,
  Flame,
  Hospital,
  Phone,
  ShieldCheck,
  Star,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';
import { BentoCard } from '@/components/bento/bento-card';

const skills = [
  { label: 'Gas Lines', icon: Flame },
  { label: 'Water Heaters', icon: Droplets },
  { label: 'Repipes', icon: Wrench },
  { label: 'Commercial', icon: Building2 },
  { label: 'Backflow', icon: ShieldCheck },
  { label: 'Leak Detection', icon: Star },
];

export function PortfolioBento() {
  return (
    <section aria-label="Our work portfolio" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="mb-10 md:mb-14">
        <p className="text-brand-red font-black uppercase tracking-[0.3em] text-sm mb-3">Portfolio</p>
        <h1 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase">
          Our <span className="text-brand-red">Work</span>
        </h1>
        <p className="mt-4 max-w-2xl text-body text-lg">
          Decades of residential and commercial plumbing across the Valley — from gas lines to
          hospital infrastructure.
        </p>
      </div>

      {/* Asymmetric bento grid — 4 columns on desktop */}
      <div className="bento-grid">
        {/* 1. Hero / About — large rectangle */}
        <BentoCard
          title="Family Owned Since 1986"
          description="Hickman Plumbing delivers honest, dependable craftsmanship for homes and businesses. Licensed, bonded, and insured."
          className="bento-hero"
          delay={0}
          variant="navy"
          footer={
            <p className="text-sm text-white/70 font-bold uppercase tracking-widest">
              Quality you can actually trust
            </p>
          }
        >
          <div className="flex flex-wrap gap-2 mt-2">
            {['Residential', 'Commercial', 'Emergency'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* 4. Stats */}
        <BentoCard
          title="40+"
          description="Years serving Scottsdale and the Valley"
          className="bento-stat"
          delay={80}
          footer={<Award size={28} className="text-brand-red" aria-hidden />}
        />

        <BentoCard
          title="Southwest"
          description="On the Southwest Preferred List for gas work"
          className="bento-stat-accent"
          delay={120}
          variant="accent"
          href="/services"
          ariaLabel="View Southwest Preferred services"
        />

        {/* 2. Skills / Tech stack */}
        <BentoCard
          title="Core Expertise"
          description="Full-service plumbing capabilities"
          className="bento-skills"
          delay={160}
        >
          <ul className="grid grid-cols-2 gap-3 mt-2" role="list">
            {skills.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-lg bg-surface-muted px-3 py-2 text-sm font-bold text-primary"
              >
                <Icon size={16} className="text-brand-red shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* 3. Projects — varied sizes */}
        <BentoCard
          title="Honor Health Hospitals"
          description="Large-scale institutional plumbing trusted by Honor Health and hospital systems across the Valley."
          className="bento-project-lg"
          delay={200}
          href="/services"
          ariaLabel="Learn about hospital plumbing projects"
          footer={
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-red uppercase tracking-wide">
              <Hospital size={18} aria-hidden /> Institutional
            </span>
          }
        />

        <BentoCard
          title="Restaurants"
          description="Commercial kitchens, grease lines, and emergency repair."
          className="bento-project-sm"
          delay={240}
          href="/services"
          ariaLabel="Restaurant plumbing services"
        >
          <UtensilsCrossed size={32} className="text-brand-red mt-2" aria-hidden />
        </BentoCard>

        <BentoCard
          title="Churches"
          description="Installs and repairs for places of worship."
          className="bento-project-sm"
          delay={280}
          href="/services"
          ariaLabel="Church plumbing services"
        >
          <Church size={32} className="text-brand-red mt-2" aria-hidden />
        </BentoCard>

        <BentoCard
          title="Tenant Improvements"
          description="Office and retail build-outs, remodels, and commercial tenant plumbing."
          className="bento-project-md"
          delay={320}
          href="/services"
          ariaLabel="Tenant improvement plumbing"
        >
          <Building2 size={28} className="text-brand-red" aria-hidden />
        </BentoCard>

        {/* 5. Contact */}
        <BentoCard
          title="Get In Touch"
          description="Call us or book online — we'll confirm your appointment."
          className="bento-contact"
          delay={360}
          variant="accent"
          href="/#booking"
          ariaLabel="Book a service appointment"
          footer={
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide">
              <Calendar size={18} aria-hidden /> Book Online
            </span>
          }
        />

        {/* 6. Latest / Services highlight */}
        <BentoCard
          title="(480) 945-6111"
          description="Or call our alternate line: (480) 945-6771"
          className="bento-phone"
          delay={400}
          href="tel:4809456111"
          ariaLabel="Call Hickman Plumbing"
          footer={
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-red uppercase tracking-wide">
              <Phone size={18} aria-hidden /> Call Now
            </span>
          }
        />
      </div>
    </section>
  );
}