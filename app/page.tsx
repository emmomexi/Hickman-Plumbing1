'use client';

import React, { useState } from 'react';
import { Phone, Star, ShieldCheck, Award, Droplets, MapPin, CheckCircle2, Clock, Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { sendBookingEmail } from './actions';

// --- SUPABASE CONFIGURATION ---
// Note: I removed '/rest/v1/' from the URL as the client adds it automatically
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service_type: 'General Repair',
    preferred_date: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from('bookings')
      .insert([formData]);

    if (!error) {
      // Second: Trigger the email notification
      await sendBookingEmail(formData);

      setSubmitted(true);
      setFormData({ name: '', phone: '', address: '', service_type: 'General Repair', preferred_date: '' });
    } else {
      alert("Error submitting request. Please call us directly at (480) 945-6111!");
    }
    setLoading(false);
  };

  // Local Business Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingBusiness",
    "name": "Hickman Plumbing Inc.",
    "telephone": "+14809456111",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "addressCountry": "US"
    }
  };

  return (
    <div className="bg-white text-[#1B2A41] font-sans min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* --- TOP CONTACT BAR --- */}
      <div className="bg-[#1B2A41] text-white py-3 px-4 md:px-6 border-b-4 border-[#B22234]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <span className="flex items-center gap-2 font-bold text-sm md:text-base text-white">
            <MapPin size={20} className="text-[#B22234]"/> Scottsdale & Paradise Valley, AZ
          </span>
          <a href="tel:4809456771" className="flex items-center gap-2 text-xl md:text-2xl hover:text-red-400 transition-colors font-black tracking-tight text-white">
            <Phone size={24} className="fill-white" /> (480) 945-6111 or (480) 945-6771
          </a>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="bg-white py-4 md:py-6 px-4 md:px-12 flex justify-between items-center border-b-2 border-gray-100 sticky top-0 z-50">
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl font-serif font-black tracking-tighter text-[#1B2A41] leading-none uppercase">Hickman</span>
          <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] text-[#B22234] uppercase">Plumbing Inc.</span>
        </div>
        
        <button 
          onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
          className="bg-[#B22234] text-white px-4 py-3 md:px-8 md:py-4 rounded-md font-black hover:bg-[#1B2A41] transition-all shadow-md text-sm md:text-lg uppercase tracking-tight"
        >
          Book Online
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="bg-gray-50 py-10 md:py-16 px-4 md:px-12 border-b">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <Star size={20} className="text-[#B22234] fill-[#B22234]" />
              <span className="text-base md:text-lg font-black uppercase tracking-widest text-[#B22234]">Family Owned Since 1986</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif font-black mb-6 md:mb-8 text-[#1B2A41] leading-tight text-left uppercase">
              Quality Plumbing <br className="hidden md:block" /> You Can <span className="text-[#B22234]">Actually Trust.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-800 mb-8 md:mb-10 leading-relaxed font-medium text-left">
              Since 1986, our family-owned plumbing company has proudly served Scottsdale with honesty, hard work, and dependable craftsmanship. From private residential repairs to large-scale commercial and infrastructure projects, we bring decades of hands-on experience and knowledge to every job. As proud Americans who believe in doing things the right way, we take great pride in delivering quality work, trustworthy service, and lasting solutions our customers rely on.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:4809456771" className="bg-[#B22234] text-white px-8 py-5 md:px-10 md:py-6 rounded-md font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl">
                <Phone size={28} /> (480) 945-6771
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* The Red Frame - hidden on smallest screens to avoid clutter */}
            <div className="absolute -inset-2 bg-[#B22234] rounded-xl rotate-1 hidden sm:block"></div>
            <img 
              src="/hero-plumbing.png" 
              alt="Hickman Plumbing Service Truck" 
              className="relative rounded-lg shadow-2xl w-full h-[300px] md:h-[450px] object-cover bg-gray-200"
            />
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto border-4 md:border-8 border-[#1B2A41] p-6 md:p-12 shadow-[10px_10px_0px_0px_rgba(178,34,52,1)] md:shadow-[20px_20px_0px_0px_rgba(178,34,52,1)]">
          <div className="text-center mb-8 md:text-left md:mb-10">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-[#1B2A41] mb-4 uppercase">Schedule Service</h2>
            <p className="text-lg md:text-xl font-bold text-gray-600 italic">Request a date and we will call you to confirm.</p>
          </div>

          {submitted ? (
            <div className="bg-green-100 border-4 border-green-600 p-8 text-center rounded-xl">
              <CheckCircle2 size={64} className="mx-auto text-green-600 mb-4" />
              <h3 className="text-3xl font-black text-green-900 uppercase">Request Sent!</h3>
              <p className="text-xl text-green-800 font-bold mt-2">The Hickman family will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 font-bold underline text-green-900 uppercase tracking-widest">Send Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-[#1B2A41]">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your name"
                  className="w-full p-4 border-2 md:border-4 border-gray-200 rounded-lg text-lg font-bold focus:border-[#B22234] outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-[#1B2A41]">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="(480) 000-0000"
                  className="w-full p-4 border-2 md:border-4 border-gray-200 rounded-lg text-lg font-bold focus:border-[#B22234] outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-[#1B2A41]">Home Address</label>
                <input 
                  required
                  type="text" 
                  placeholder="Street address in Scottsdale/PV"
                  className="w-full p-4 border-2 md:border-4 border-gray-200 rounded-lg text-lg font-bold focus:border-[#B22234] outline-none"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-[#1B2A41]">Service Needed</label>
                <select 
                  className="w-full p-4 border-2 md:border-4 border-gray-200 rounded-lg text-lg font-bold focus:border-[#B22234] outline-none"
                  value={formData.service_type}
                  onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                >
                  <option>General Repair</option>
                  <option>Water Heater</option>
                  <option>Drain Cleaning</option>
                  <option>Remodel</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-[#1B2A41]">Preferred Date</label>
                <input 
                  required
                  type="date" 
                  className="w-full p-4 border-2 md:border-4 border-gray-200 rounded-lg text-lg font-bold focus:border-[#B22234] outline-none"
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({...formData, preferred_date: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-[#1B2A41] text-white py-5 md:py-6 rounded-lg font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-[#B22234] transition-all flex justify-center items-center gap-4"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <CalendarIcon />}
                  {loading ? 'Processing...' : 'Request Appointment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-serif font-black mb-4 text-[#1B2A41] uppercase italic">Our Expertise</h2>
        <p className="text-center text-lg md:text-xl text-gray-600 mb-12 md:mb-16 font-bold uppercase tracking-widest">Reliable Solutions for Your Home</p>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: "Leaks & Repairs", desc: "Expert service for faucets, toilets, and broken pipes.", icon: <ShieldCheck size={48} className="text-[#B22234]"/> },
            { title: "Water Heaters", desc: "Installation and repair for all traditional and tankless units.", icon: <Droplets size={48} className="text-[#B22234]"/> },
            { title: "Bath & Kitchen", desc: "Premium plumbing for your Scottsdale remodeling project.", icon: <Award size={48} className="text-[#B22234]"/> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 md:p-10 border-4 border-[#1B2A41] shadow-[10px_10px_0px_0px_rgba(27,42,65,1)]">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-serif font-black mb-4 uppercase">{item.title}</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-[#1B2A41] text-white py-16 md:py-24 px-4 md:px-6 border-y-8 border-[#B22234]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center text-center md:text-left">
            <div className="w-full md:w-1/3">
                <img 
                  src="/temp.jpeg" 
                  alt="Hickman Family Heritage" 
                  className="rounded-full border-4 md:border-8 border-[#B22234] w-56 h-56 md:w-72 md:h-72 object-cover mx-auto shadow-2xl"
                />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 md:mb-8 text-white underline decoration-[#B22234] decoration-4 md:decoration-8 underline-offset-8 uppercase">Our Family Creed</h2>
              <p className="text-xl md:text-2xl leading-relaxed italic mb-8 font-medium text-white">
                "Since 1986, we've believed that doing things the right way still matters. We take great pride in delivering trustworthy service and lasting solutions our neighbors can rely on."
              </p>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-4 text-lg md:text-xl font-black text-white uppercase">
                  <CheckCircle2 size={24} className="text-[#B22234]" /> Licensed & Bonded
                </div>
                <div className="flex items-center gap-4 text-lg md:text-xl font-black text-white uppercase">
                  <CheckCircle2 size={24} className="text-[#B22234]" /> Senior & Veteran Discounts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EMERGENCY BANNER --- */}
      <section className="bg-yellow-400 py-10 md:py-12 px-4 md:px-6 border-y-4 border-black text-center">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4"><Clock size={48} className="text-black" /></div>
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase italic tracking-tighter">Need Help Right Now?</h2>
            <a href="tel:4809456771" className="inline-block bg-black text-white px-8 md:px-12 py-5 md:py-6 rounded-md font-black text-2xl md:text-3xl shadow-xl hover:scale-105 transition-transform">
                CALL (480) 945-6111 or (480) 945-6771
            </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white text-[#1B2A41] py-16 md:py-20 px-4 md:px-6 border-t-8 border-[#1B2A41]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16 font-bold text-center md:text-left">
          <div>
            <div className="text-2xl md:text-3xl font-serif font-black mb-4">HICKMAN PLUMBING</div>
            <p className="text-lg md:text-xl">Proudly American Owned. Serving the Valley Since 1986.</p>
          </div>
          <div>
            <h4 className="uppercase text-[#B22234] mb-4 tracking-widest text-sm md:text-base">Office Location</h4>
            <p className="text-xl md:text-2xl font-black">Tempe, AZ</p>
            <p className="text-base md:text-lg mt-2">Serving Valley-Wide Locations</p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
             <h4 className="uppercase text-[#B22234] tracking-widest text-sm md:text-base">Patriotic Values</h4>
             <div className="flex gap-2">
                <div className="h-8 w-12 md:h-10 md:w-16 bg-[#B22234]"></div>
                <div className="h-8 w-12 md:h-10 md:w-16 bg-white border-2 border-gray-200"></div>
                <div className="h-8 w-12 md:h-10 md:w-16 bg-[#1B2A41]"></div>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t-2 border-gray-100 text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs text-center md:text-left">
          <p>© 2024 Hickman Plumbing Inc. ROC #192837</p>
        </div>
      </footer>
    </div>
  );
}