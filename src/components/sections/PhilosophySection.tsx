import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BRAND_PHILOSOPHY } from '../../data/vehicles';

export const PhilosophySection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section id="philosophy" className="relative w-full py-28 md:py-36 bg-[#111317] text-[#F5F5F2] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & 3 Principles */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B] mb-4">
                <span>BEHIND THE MACHINE</span>
                <span className="text-white/20">·</span>
                <span>ENGINEERING DOCTRINE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2] leading-tight mb-6">
                DESIGNED WITH INTENTION. <br />
                <span className="text-[#C8A96B]">BUILT WITH PURPOSE.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#A1A5AE] font-light leading-relaxed mb-12 max-w-xl">
                Every curve serves a purpose. Every component reflects a decision. At Aureon, design and engineering work together to create vehicles that feel as exceptional as they perform.
              </p>
            </div>

            {/* Three Principles Accordion / Stack */}
            <div className="space-y-4">
              {BRAND_PHILOSOPHY.map((principle, index) => {
                const isActive = activePrinciple === index;
                return (
                  <div
                    key={principle.number}
                    onClick={() => setActivePrinciple(index)}
                    className={`p-6 sm:p-7 border rounded-sm transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-[#C8A96B]/60 bg-[#17191E] shadow-lg shadow-black/40'
                        : 'border-white/10 bg-[#14161A]/50 hover:border-white/20 hover:bg-[#17191E]/50'
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-mono-tech font-bold tracking-widest ${
                          isActive ? 'text-[#C8A96B]' : 'text-[#A1A5AE]'
                        }`}>
                          {principle.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-[#F5F5F2]">
                          {principle.title}
                        </h3>
                      </div>
                      <span className={`text-[10px] font-mono-tech uppercase tracking-widest ${
                        isActive ? 'text-[#C8A96B]' : 'text-white/30'
                      }`}>
                        {isActive ? 'ACTIVE' : '0' + (index + 1)}
                      </span>
                    </div>

                    <p className="text-xs font-mono-tech uppercase tracking-wider text-[#C8A96B] mb-2 pl-9">
                      {principle.tagline}
                    </p>

                    <p className={`text-sm text-[#A1A5AE] font-light leading-relaxed pl-9 transition-all duration-300 ${
                      isActive ? 'opacity-100 max-h-40' : 'opacity-70 line-clamp-1'
                    }`}>
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Craftsmanship Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 bg-[#17191E] shadow-2xl">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/src/assets/images/gallery_interior_craftsmanship_1793358311394.jpg"
                  alt="Aureon bespoke interior craftsmanship with titanium dials and hand-stitched leather"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80" />

              {/* Inset Annotation */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#08090B]/85 backdrop-blur-md border border-white/10 rounded-sm">
                <div className="flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-1">
                  <span>ATELIER SPECIFICATION</span>
                  <span>REF. M-904</span>
                </div>
                <p className="text-xs text-[#F5F5F2] font-medium">
                  Solid knurled champagne titanium rotary controls with 0.02mm tactile detents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
