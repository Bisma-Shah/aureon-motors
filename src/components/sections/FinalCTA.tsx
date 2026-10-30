import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative w-full py-32 md:py-44 bg-[#08090B] text-[#F5F5F2] overflow-hidden border-t border-white/10 select-none">
      {/* Background Image Container with Deep Vignette */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/src/assets/images/vehicle_v12_grandtourer_1793358310510.jpg"
            alt="Aureon V12 R navigating coastal highway at twilight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
            loading="lazy"
          />
        </motion.div>

        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 to-[#08090B]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090B]/40 to-[#08090B]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.3em] text-[#C8A96B] mb-6"
        >
          <span className="w-6 h-[1px] bg-[#C8A96B]" />
          <span>THE COMMENCEMENT</span>
          <span className="w-6 h-[1px] bg-[#C8A96B]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2] leading-[0.95] mb-6"
        >
          YOUR NEXT CHAPTER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F2] via-[#E2E5EA] to-[#C8A96B]">
            STARTS HERE.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#A1A5AE] max-w-xl mx-auto font-light leading-relaxed mb-12"
        >
          Discover a different standard of automotive excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onExploreClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C8A96B] hover:bg-[#d8bd82] active:bg-[#b89753] text-[#08090B] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-xl shadow-[#C8A96B]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]"
          >
            <span>Explore Our Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111317]/80 hover:bg-[#17191E] border border-white/20 hover:border-white/40 text-[#F5F5F2] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
          >
            <span>Get in Touch</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
