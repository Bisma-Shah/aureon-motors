import React from 'react';
import { motion } from 'motion/react';
import { BRAND_STATS } from '../../data/vehicles';

export const PerformanceSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-[#08090B] text-[#F5F5F2] border-t border-white/10 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.3em] text-[#C8A96B] mb-3">
            <span>METRIC TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2]">
            BENCHMARK PERFORMANCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A1A5AE] font-light">
            Measured at maximum output. Engineered for instantaneous throttle response and peerless mechanical grip.
          </p>
        </div>

        {/* 4 Performance Stat Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="p-8 sm:p-10 bg-[#111317] border border-white/10 rounded-sm flex flex-col justify-between hover:border-[#C8A96B]/50 transition-colors group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#A1A5AE] mb-8">
                <span>INDEX 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-extrabold font-mono-tech tracking-tight text-[#F5F5F2] group-hover:text-white tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-lg font-mono-tech font-bold text-[#C8A96B]">
                    {stat.unit}
                  </span>
                </div>

                <div className="w-8 h-[2px] bg-[#C8A96B] mb-3 transition-all duration-300 group-hover:w-16" />

                <span className="text-xs font-mono-tech uppercase tracking-[0.16em] text-[#A1A5AE]">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono-tech text-[#A1A5AE]/50 tracking-wider uppercase">
            * Calibrated with GT-X Concept dual-clutch transmission on dynamic simulation track.
          </p>
        </div>
      </div>
    </section>
  );
};
