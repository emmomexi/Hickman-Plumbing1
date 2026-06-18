import { Clock } from 'lucide-react';

export function SiteFooter() {
  return (
    <>
      <section
        className="py-10 md:py-12 px-4 md:px-6 border-y-4 border-black dark:border-amber-800 text-center transition-colors"
        style={{ backgroundColor: 'var(--emergency-bg)', color: 'var(--emergency-text)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <Clock size={48} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">
            Need Help Right Now?
          </h2>
          <a
            href="tel:4809456111"
            className="inline-block bg-black dark:bg-brand-navy text-white px-8 md:px-12 py-5 md:py-6 rounded-md font-black text-2xl md:text-3xl shadow-xl hover:scale-105 transition-transform"
          >
            CALL (480) 945-6111 or (480) 945-6771
          </a>
        </div>
      </section>

      <footer className="bg-surface text-primary py-16 md:py-20 px-4 md:px-6 border-t-8 border-brand-navy dark:border-brand-red transition-colors">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16 font-bold text-center md:text-left">
          <div>
            <div className="text-2xl md:text-3xl font-serif font-black mb-4">HICKMAN PLUMBING</div>
            <p className="text-lg md:text-xl text-body">Proudly American Owned. Serving the Valley Since 1986.</p>
          </div>
          <div>
            <h4 className="uppercase text-brand-red mb-4 tracking-widest text-sm md:text-base">Office Location</h4>
            <p className="text-xl md:text-2xl font-black">Tempe, AZ</p>
            <p className="text-base md:text-lg mt-2 text-body">Serving Valley-Wide Locations</p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="uppercase text-brand-red tracking-widest text-sm md:text-base">Patriotic Values</h4>
            <div className="flex gap-2">
              <div className="h-8 w-12 md:h-10 md:w-16 bg-brand-red"></div>
              <div className="h-8 w-12 md:h-10 md:w-16 bg-surface border-2 border-border"></div>
              <div className="h-8 w-12 md:h-10 md:w-16 bg-brand-navy"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t-2 border-border text-muted font-bold uppercase tracking-widest text-[10px] md:text-xs text-center md:text-left">
          <p>© 2024 Hickman Plumbing Inc. ROC #192837</p>
        </div>
      </footer>
    </>
  );
}