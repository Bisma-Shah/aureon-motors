import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/vehicles';
import { GalleryItem } from '../../types/vehicle';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="gallery" className="relative w-full py-28 md:py-36 bg-[#08090B] text-[#F5F5F2] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B] mb-3">
              <span>VISUAL ARCHIVE</span>
              <span className="text-white/20">·</span>
              <span>CINEMATIC APERTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2]">
              BEAUTY IN EVERY DETAIL.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#A1A5AE] font-light leading-relaxed">
            From aerodynamic surface flow to hand-knurled titanium switchgear, every angle represents our obsession with perfection.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // Asymmetrical grid column spans for editorial rhythm
            let colSpan = 'md:col-span-6';
            if (index === 0) colSpan = 'md:col-span-8';
            if (index === 1) colSpan = 'md:col-span-4';
            if (index === 2) colSpan = 'md:col-span-4';
            if (index === 3) colSpan = 'md:col-span-4';
            if (index === 4) colSpan = 'md:col-span-4';
            if (index === 5) colSpan = 'md:col-span-12';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => onOpenLightbox(item, index)}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#111317] cursor-pointer ${colSpan} h-[320px] sm:h-[380px] lg:h-[440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]`}
                tabIndex={0}
                role="button"
                aria-label={`View photo of ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(item, index);
                  }
                }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/90 via-[#08090B]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Corner Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] bg-[#08090B]/80 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Lightbox Expand Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-8 h-8 rounded-full bg-[#08090B]/80 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm hover:border-[#C8A96B]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Caption & Accent Hairline */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#A1A5AE] block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#F5F5F2] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A1A5AE] max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="w-0 group-hover:w-full h-[2px] bg-[#C8A96B] transition-all duration-400 mt-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
