'use client';

import React, { useState } from 'react';
import { Phone, Star, ShieldCheck, Award, Droplets, CheckCircle2, Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { submitBookingRequest } from './actions';
import { PLUMBING_SERVICES, getServiceOptions, formatServiceType } from './services';
import type { BookingInsert } from '@/lib/types/database';

const EMPTY_FORM = {
  name: '',
  phone: '',
  address: '',
  service_category: '',
  service_option: '',
  preferred_date: '',
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const serviceOptions = getServiceOptions(formData.service_category);
  const requiresServiceOption = Boolean(serviceOptions?.length);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service_category) {
      alert('Please select a service.');
      return;
    }
    if (requiresServiceOption && !formData.service_option) {
      alert('Please select a specific service option.');
      return;
    }

    setLoading(true);

    const submission: BookingInsert = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      preferred_date: formData.preferred_date,
      service_type: formatServiceType(formData.service_category, formData.service_option),
    };

    const result = await submitBookingRequest(submission);

    if (!result.success) {
      alert(result.error);
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setFormData(EMPTY_FORM);
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
    <div className="bg-page text-primary font-sans min-h-screen transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <SiteHeader activePage="home" />

      {/* --- HERO SECTION --- */}
      <section className="bg-section py-10 md:py-16 px-4 md:px-12 border-b border-border transition-colors">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <Star size={20} className="text-brand-red fill-brand-red" />
              <span className="text-base md:text-lg font-black uppercase tracking-widest text-brand-red">Family Owned Since 1986</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif font-black mb-6 md:mb-8 text-primary leading-tight text-left uppercase">
              Quality Plumbing <br className="hidden md:block" /> You Can <span className="text-brand-red">Actually Trust.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-body mb-8 md:mb-10 leading-relaxed font-medium text-left">
              Since 1986, our family-owned plumbing company has proudly served Scottsdale with honesty, hard work, and dependable craftsmanship. From private residential repairs to large-scale commercial and infrastructure projects, we bring decades of hands-on experience and knowledge to every job. As proud Americans who believe in doing things the right way, we take great pride in delivering quality work, trustworthy service, and lasting solutions our customers rely on. Our company is Licensed, Bonded and Insured.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:4809456111" className="bg-brand-red text-white px-8 py-5 md:px-10 md:py-6 rounded-md font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl">
                <Phone size={28} /> (480) 945-6111 or (480) 945-6771
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* The Red Frame - hidden on smallest screens to avoid clutter */}
            <div className="absolute -inset-2 bg-brand-red rounded-xl rotate-1 hidden sm:block"></div>
            <img 
              src="/hero-plumbing.png" 
              alt="Hickman Plumbing Service Truck" 
              className="relative rounded-lg shadow-2xl w-full h-[300px] md:h-[450px] object-cover bg-surface-muted"
            />
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-16 md:py-24 px-4 md:px-6 bg-page transition-colors">
        <div className="max-w-4xl mx-auto card-accent p-6 md:p-12">
          <div className="text-center mb-8 md:text-left md:mb-10">
            <h2 className="text-3xl md:text-6xl font-serif font-black text-primary mb-4 uppercase">Schedule Service</h2>
            <p className="text-lg md:text-xl font-bold text-muted italic">Request a date and we will call you to confirm.</p>
          </div>

          {submitted ? (
            <div className="bg-green-100 dark:bg-green-950 border-4 border-green-600 dark:border-green-500 p-8 text-center rounded-xl">
              <CheckCircle2 size={64} className="mx-auto text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-3xl font-black text-green-900 dark:text-green-100 uppercase">Request Sent!</h3>
              <p className="text-xl text-green-800 dark:text-green-200 font-bold mt-2">The Hickman family will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 font-bold underline text-green-900 dark:text-green-200 uppercase tracking-widest">Send Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-primary">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-primary">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="(000) 000-0000"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-primary">Home Address</label>
                <input 
                  required
                  type="text" 
                  placeholder="Street address"
                  className="form-input"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-primary">Service Category</label>
                <select
                  required
                  className="form-input"
                  value={formData.service_category}
                  onChange={(e) => setFormData({ ...formData, service_category: e.target.value, service_option: '' })}
                >
                  <option value="">Select a service...</option>
                  {PLUMBING_SERVICES.map((service) => (
                    <option key={service.label} value={service.label}>{service.label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-primary">
                  {requiresServiceOption ? 'Service Option' : 'Service Details'}
                </label>
                <select
                  required={requiresServiceOption}
                  disabled={!requiresServiceOption}
                  className="form-input"
                  value={formData.service_option}
                  onChange={(e) => setFormData({ ...formData, service_option: e.target.value })}
                >
                  <option value="">
                    {requiresServiceOption ? 'Select an option...' : 'No additional options'}
                  </option>
                  {serviceOptions?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-base md:text-lg font-black uppercase text-primary">Preferred Date</label>
                <input 
                  required
                  type="date" 
                  className="form-input"
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({...formData, preferred_date: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-brand-navy text-white py-5 md:py-6 rounded-lg font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-brand-red transition-all flex justify-center items-center gap-4"
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
        <h2 className="text-center text-4xl md:text-6xl font-serif font-black mb-4 text-primary uppercase italic">Our Expertise</h2>
        <p className="text-center text-lg md:text-xl text-muted mb-12 md:mb-16 font-bold uppercase tracking-widest">Reliable Solutions for Your Home</p>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: "Leaks & Repairs", desc: "Expert service for faucets, toilets, and broken pipes.", icon: <ShieldCheck size={48} className="text-brand-red"/> },
            { title: "Water Heaters", desc: "Installation and repair for all traditional and tankless units.", icon: <Droplets size={48} className="text-brand-red"/> },
            { title: "Bath & Kitchen", desc: "Premium plumbing for your Scottsdale remodeling project.", icon: <Award size={48} className="text-brand-red"/> }
          ].map((item, i) => (
            <div key={i} className="card-surface p-8 md:p-10">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-serif font-black mb-4 uppercase text-primary">{item.title}</h3>
              <p className="text-lg md:text-xl text-body leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-brand-navy text-white py-16 md:py-24 px-4 md:px-6 border-y-8 border-brand-red">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center text-center md:text-left">
            <div className="w-full md:w-1/3">
                <img 
                  src="/temp.jpeg" 
                  alt="Hickman Family Heritage" 
                  className="rounded-full border-4 md:border-8 border-brand-red w-56 h-56 md:w-72 md:h-72 object-cover mx-auto shadow-2xl"
                />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 md:mb-8 text-white underline decoration-brand-red decoration-4 md:decoration-8 underline-offset-8 uppercase">Our Family Creed</h2>
              <p className="text-xl md:text-2xl leading-relaxed italic mb-8 font-medium text-white">
                "Since 1986, we've believed that doing things the right way still matters. We take great pride in delivering trustworthy service and lasting solutions our neighbors can rely on."
              </p>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-4 text-lg md:text-xl font-black text-white uppercase">
                  <CheckCircle2 size={24} className="text-brand-red" /> Licensed, Bonded & Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}