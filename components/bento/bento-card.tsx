'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type BentoCardProps = {
  title: string;
  description?: string;
  href?: string;
  ariaLabel?: string;
  className?: string;
  delay?: number;
  variant?: 'default' | 'accent' | 'navy';
  children?: ReactNode;
  footer?: ReactNode;
};

const variantClasses = {
  default: 'bg-surface border-border hover:border-brand-red/60',
  accent: 'bg-brand-red border-brand-red text-white hover:shadow-[0_0_40px_rgba(178,34,52,0.35)]',
  navy: 'bg-brand-navy border-brand-navy text-white hover:shadow-[0_0_40px_rgba(27,42,65,0.5)] dark:hover:shadow-[0_0_40px_rgba(178,34,52,0.25)]',
};

export function BentoCard({
  title,
  description,
  href,
  ariaLabel,
  className = '',
  delay = 0,
  variant = 'default',
  children,
  footer,
}: BentoCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const content = (
    <>
      <div className="relative z-10 flex h-full flex-col">
        <h3
          className={`font-serif font-black uppercase tracking-tight text-lg md:text-xl ${
            variant === 'default' ? 'text-primary' : 'text-white'
          }`}
        >
          {title}
        </h3>
        {description && (
          <p
            className={`mt-2 text-sm md:text-base leading-relaxed ${
              variant === 'default' ? 'text-body' : 'text-white/85'
            }`}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-auto pt-4 flex-grow">{children}</div>}
        {footer && <div className="mt-4 pt-2">{footer}</div>}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-red/0 via-brand-red/0 to-brand-red/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </>
  );

  const sharedClasses = `
    bento-card group relative overflow-hidden rounded-2xl border-2 p-5 md:p-6
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.02]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-page
    ${variantClasses[variant]}
    ${visible ? 'bento-card-visible' : ''}
    ${className}
  `;

  const style = { transitionDelay: `${delay}ms` };

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel ?? title}
        className={sharedClasses}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <article ref={ref as React.RefObject<HTMLElement>} className={sharedClasses} style={style}>
      {content}
    </article>
  );
}