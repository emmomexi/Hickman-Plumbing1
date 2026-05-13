import React from 'react';
import { Phone, Calendar, Star, ShieldCheck, Award, Droplets, MapPin, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-hickman-cream text-hickman-navy font-sans min-h-screen">
      
      {/* --- TOP ACCESSIBILITY BAR --- */}
      <div className="bg-hickman-navy text-white py-2 px-6 flex justify-between items-center text-xs md:text-sm font-semibold">
        <span className="flex items-center gap-2"><MapPin size={14} className="text-hickman-red"/> Serving Scottsdale & Paradise Valley</span>
        <a href="tel:4809456771" className="flex items-center gap-2 hover:text-hickman-red transition-colors font-bold">
          <Phone size={16} /> (480) 945-6771
        </a>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-hickman-navy leading-none">HICKMAN</span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-hickman-red">PLUMBING INC.</span>
        </div>
        
        <div className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-widest">
          <a href="#services" className="hover:text-hickman-red transition-colors">Services</a>
          <a href="#about" className="hover:text-hickman-red transition-colors">About Our Founder</a>
          <a href="#offers" className="hover:text-hickman-red transition-colors">Special Offers</a>
        </div>

        <button className="bg-hickman-red text-white px-5 py-3 rounded-sm font-bold hover:bg-red-700 transition-all shadow-md active:scale-95 text-sm">
          BOOK ONLINE
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative py-16 px-6 md:px-12 lg:py-32 bg-hickman-navy text-white">
        <div className="absolute inset-0 opacity-10 grayscale contrast-125 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2000')] bg-cover bg-center" />
        
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-hickman-red/20 border border-hickman-red/30 px-4 py-1 rounded-full mb-6">
              <Star size={14} className="text-hickman-red fill-hickman-red" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Locally-Owned & Family Operated</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Expert Plumbing, <br />
              <span className="text-hickman-red italic">Patriotic Values.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0">
              We provide Scottsdale homeowners with honest, reliable plumbing services. From emergency leaks to custom bathroom remodels, we do it right the first time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:4809456771" className="bg-white text-hickman-navy px-8 py-4 rounded-sm font-black text-lg flex items-center justify-center gap-3 hover:bg-hickman-cream transition-all">
                <Phone size={24} /> (480) 945-6771
              </a>
              <button className="border border-white/40 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/10 transition-all">
                Schedule Service
              </button>
            </div>
          </div>

          <div className="hidden lg:block bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold mb-4 italic text-center">Fast Request</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-white/10 border border-white/20 rounded focus:border-hickman-red outline-none" />
              <input type="text" placeholder="Phone Number" className="w-full p-3 bg-white/10 border border-white/20 rounded focus:border-hickman-red outline-none" />
              <select className="w-full p-3 bg-white/10 border border-white/20 rounded focus:border-hickman-red outline-none text-slate-400">
                <option>Emergency Repair</option>
                <option>Water Heater</option>
                <option>Remodel</option>
              </select>
              <button className="w-full bg-hickman-red py-4 rounded font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">Request Call Back</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE CARDS --- */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Residential Repairs", desc: "Expert troubleshooting for leaks, drains, and fixtures with transparent pricing.", icon: <ShieldCheck className="text-hickman-red" size={32}/> },
            { title: "Water Heaters", desc: "Specializing in both traditional tanks and modern tankless energy-efficient systems.", icon: <Droplets className="text-hickman-red" size={32}/> },
            { title: "Remodeling", desc: "Bringing high-end kitchen and bath designs to life with precision plumbing.", icon: <Award className="text-hickman-red" size={32}/> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border-b-4 border-hickman-navy shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
              <span className="text-hickman-red font-bold text-sm tracking-widest uppercase cursor-pointer">Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE GRANDMOTHER'S SECTION --- */}
      <section id="about" className="bg-white py-20 px-6 border-y">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-hickman-red"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000" 
                  alt="Quality Craftsmanship" 
                  className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl font-bold mb-6">Built on Integrity</h2>
            <p className="text-xl text-slate-700 italic mb-6">
              "We don't just fix pipes; we serve neighbors. Our family has been part of the Scottsdale community for decades, and we treat every home with the respect it deserves."
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 font-bold text-hickman-navy">
                <CheckCircle2 className="text-hickman-red" size={20}/> Licensed, Bonded, and Insured
              </div>
              <div className="flex items-center gap-3 font-bold text-hickman-navy">
                <CheckCircle2 className="text-hickman-red" size={20}/> Senior & Military Discounts
              </div>
              <div className="flex items-center gap-3 font-bold text-hickman-navy">
                <CheckCircle2 className="text-hickman-red" size={20}/> Honest Upfront Estimates
              </div>
            </div>
            <p className="font-serif text-2xl font-bold">— The Hickman Family</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-hickman-navy text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
          <div>
            <div className="font-serif text-2xl font-bold mb-2">HICKMAN PLUMBING</div>
            <p className="text-slate-400 text-sm">Serving the Valley since 2004. <br/>A Proud American Small Business.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-hickman-red tracking-widest text-xs">Contact Us</h4>
            <p className="text-sm">Scottsdale, AZ</p>
            <p className="text-lg font-bold mt-2">(480) 945-6771</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-hickman-red tracking-widest text-xs">Hours</h4>
            <p className="text-sm italic">Mon–Fri: 7:00 AM – 5:00 PM</p>
            <p className="text-sm font-bold text-hickman-red mt-1">24/7 Emergency Service Available</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">
          <p>© 2024 Hickman Plumbing Inc. ROC #192837</p>
          <p>Built with pride in Arizona</p>
        </div>
      </footer>
    </div>
  );
}