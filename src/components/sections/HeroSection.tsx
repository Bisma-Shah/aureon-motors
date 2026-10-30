import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onStoryClick }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#08090B] pt-28 pb-12 px-6 md:px-12 select-none">
      {/* Background Image Container with Cinematic Scrims */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/src/assets/images/hero_aureon_gtx_1793358308839.jpg"
            alt="Aureon GT-X flagship coupe navigating alpine roads at twilight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
            loading="eager"
          />
        </motion.div>

        {/* Ambient Darkening Scrims: Multi-directional radial & linear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/90 via-[#08090B]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090B]/30 to-[#08090B]/90" />
      </div>

      {/* Subtle Top Status Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono-tech tracking-[0.25em] text-[#A1A5AE] uppercase border-b border-white/10 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="text-[#C8A96B]">EST. 2026</span>
          <span className="text-white/20">/</span>
          <span>Bespoke Atelier</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden sm:flex items-center gap-2 text-right"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96B]" />
          <span>PERFORMANCE WITHOUT COMPROMISE</span>
        </motion.div>
      </div>

      {/* Center Cinematic Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-20 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-6 h-[1px] bg-[#C8A96B]" />
          <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-[0.3em] text-[#C8A96B] font-semibold">
            THE ART OF PERFORMANCE
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2] leading-[0.92] max-w-4xl text-balance mb-6"
        >
          DRIVE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F2] via-[#E2E5EA] to-[#C8A96B]">
            THE EXTRAORDINARY.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-[#A1A5AE] max-w-xl font-light leading-relaxed mb-10"
        >
          Precision in every line. Power in every movement. A new perspective on automotive excellence.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
        >
          <button
            onClick={onExploreClick}
            type="button"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C8A96B] hover:bg-[#d4b779] active:bg-[#b89753] text-[#08090B] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-lg shadow-[#C8A96B]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onStoryClick}
            type="button"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111317]/80 hover:bg-[#17191E] border border-white/15 hover:border-white/30 text-[#F5F5F2] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
          >
            <span>Discover Our Story</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom Telemetry & Scroll Anchor */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/10 text-xs font-mono-tech text-[#A1A5AE]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-6"
        >
          <div>
            <span className="block text-[10px] text-white/40 tracking-wider">FLAGSHIP CHASSIS</span>
            <span className="text-[#F5F5F2] font-semibold tracking-widest">AUREON GT-X</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10" />
          <div>
            <span className="block text-[10px] text-white/40 tracking-wider">PROPULSION</span>
            <span className="text-[#C8A96B] font-semibold tracking-widest">620 HP TWIN-TURBO</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10 hidden md:block" />
          <div className="hidden md:block">
            <span className="block text-[10px] text-white/40 tracking-wider">LATENCY</span>
            <span className="text-[#F5F5F2] font-semibold tracking-widest flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#C8A96B]" /> 0.08s SHIFT
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#showcase"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center gap-2 group text-[#A1A5AE] hover:text-[#C8A96B] transition-colors py-1"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A96B]" />
        </motion.a>
      </div>
    </section>
  );
};
