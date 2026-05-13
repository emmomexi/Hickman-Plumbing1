import React from 'react';
import { Phone, Star, ShieldCheck, Award, Droplets, MapPin, CheckCircle2, Clock } from 'lucide-react';
import type { Metadata } from "next";

// --- 1. SEO METADATA (This shows up on Google search) ---
export const metadata: Metadata = {
  title: "Hickman Plumbing Inc. | Scottsdale's Trusted Local Plumber",
  description: "Family-owned & operated in Scottsdale, AZ since 2004. High-quality plumbing repairs, water heaters, and remodels. Call (480) 945-6771 for honest service.",
};

export default function Home() {
  // --- 2. LOCAL BUSINESS SCHEMA (Helps with Google Maps ranking) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingBusiness",
    "name": "Hickman Plumbing Inc.",
    "url": "https://hickman-plumbing1.vercel.app", // Update this when you get your custom domain
    "telephone": "+14809456771",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="bg-white text-[#1B2A41] font-sans min-h-screen">
      {/* Add the Schema to the page safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* --- TOP CONTACT BAR --- */}
      <div className="bg-[#1B2A41] text-white py-3 px-6 border-b-4 border-[#B22234]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="flex items-center gap-2 font-bold text-sm md:text-base text-white">
            <MapPin size={20} className="text-[#B22234]"/> Scottsdale & Paradise Valley, AZ
          </span>
          <a href="tel:4809456771" className="flex items-center gap-2 text-xl md:text-2xl hover:text-red-400 transition-colors font-black tracking-tight text-white">
            <Phone size={24} className="fill-white" /> (480) 945-6771
          </a>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="bg-white py-6 px-6 md:px-12 flex justify-between items-center border-b-2 border-gray-100">
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-[#1B2A41] leading-none">HICKMAN</span>
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#B22234] uppercase">Plumbing Inc.</span>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-lg uppercase">
          <a href="#services" className="hover:text-[#B22234] underline decoration-2 underline-offset-8">Services</a>
          <a href="#about" className="hover:text-[#B22234] underline decoration-2 underline-offset-8">Our Story</a>
        </div>

        <button className="bg-[#B22234] text-white px-8 py-4 rounded-md font-black hover:bg-[#1B2A41] transition-all shadow-md text-lg uppercase tracking-tight">
          Book Online
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <Star size={20} className="text-[#B22234] fill-[#B22234]" />
              <span className="text-lg font-black uppercase tracking-widest text-[#B22234]">Family Owned Since 2004</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-[#1B2A41] leading-tight">
              Quality Plumbing You Can <span className="text-[#B22234]">Actually Trust.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed font-medium">
              Struggling with a leak? Need a new water heater? We provide honest, patriotic service to our Scottsdale neighbors with no hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:4809456771" className="bg-[#B22234] text-white px-10 py-6 rounded-md font-black text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl">
                <Phone size={28} /> (480) 945-6771
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-[#B22234] rounded-xl rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
              alt="Hickman Plumbing Service" 
              className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover bg-gray-200"
            />
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-serif font-black mb-4 text-[#1B2A41]">Our Services</h2>
        <p className="text-center text-xl text-gray-600 mb-16 font-bold uppercase tracking-widest">Scottsdale's Residential Experts</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Leaks & Repairs", desc: "Fast service for drippy faucets, toilet repairs, and pipe leaks.", icon: <ShieldCheck size={48} className="text-[#B22234]"/> },
            { title: "Water Heaters", desc: "Repair and installation for all traditional and tankless models.", icon: <Droplets size={48} className="text-[#B22234]"/> },
            { title: "Bath & Kitchen", desc: "Expert remodeling plumbing to modernize your Arizona home.", icon: <Award size={48} className="text-[#B22234]"/> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border-4 border-[#1B2A41] shadow-[10px_10px_0px_0px_rgba(27,42,65,1)]">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-3xl font-serif font-black mb-4">{item.title}</h3>
              <p className="text-xl text-gray-800 leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-[#1B2A41] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-white">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800" 
                  alt="Traditional Values" 
                  className="rounded-full border-8 border-[#B22234] w-64 h-64 object-cover mx-auto shadow-2xl"
                />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 text-white underline decoration-[#B22234] decoration-4 underline-offset-8">A Message From Our Family</h2>
              <p className="text-2xl leading-relaxed italic mb-8 font-medium text-white">
                "We built Hickman Plumbing on a simple idea: treat every customer like they are our own neighbor. No fancy sales talk, just honest plumbing and a fair price."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl font-black text-white">
                  <CheckCircle2 size={28} className="text-[#B22234]" /> Licensed, Bonded, and Insured
                </div>
                <div className="flex items-center gap-4 text-xl font-black text-white">
                  <CheckCircle2 size={28} className="text-[#B22234]" /> Senior & Veteran Pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EMERGENCY BANNER --- */}
      <section className="bg-yellow-400 py-12 px-6 border-y-4 border-black text-center">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4"><Clock size={48} className="text-black" /></div>
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase italic">Need Help Right Now?</h2>
            <a href="tel:4809456771" className="inline-block bg-black text-white px-12 py-6 rounded-md font-black text-3xl shadow-xl hover:scale-105 transition-transform">
                Call (480) 945-6771
            </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white text-[#1B2A41] py-20 px-6 border-t-8 border-[#1B2A41]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <div className="text-3xl font-serif font-black mb-4">HICKMAN PLUMBING</div>
            <p className="text-xl font-bold text-gray-700">Providing Honest American Service Since 2004.</p>
          </div>
          <div>
            <h4 className="font-black text-lg uppercase text-[#B22234] mb-6">Our Location</h4>
            <p className="text-2xl font-bold">Scottsdale, AZ</p>
            <p className="text-xl font-medium mt-2">Serving the entire East Valley</p>
          </div>
          <div>
            <h4 className="font-black text-lg uppercase text-[#B22234] mb-6">Office Hours</h4>
            <p className="text-xl font-bold">Mon–Fri: 7 AM – 5 PM</p>
            <p className="text-xl font-black text-[#B22234] mt-4 italic">24/7 Emergency Service Available</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-sm">
          <p>© 2024 Hickman Plumbing Inc. ROC #192837</p>
          <div className="flex gap-2">
             <div className="h-8 w-12 bg-[#B22234]"></div>
             <div className="h-8 w-12 bg-white border-2 border-gray-200"></div>
             <div className="h-8 w-12 bg-[#1B2A41]"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}