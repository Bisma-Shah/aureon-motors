import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Gauge, Zap, Compass, Shield } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { Vehicle, VehicleCategory } from '../../types/vehicle';

interface VehicleCollectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleCollection: React.FC<VehicleCollectionProps> = ({ onSelectVehicle }) => {
  const [activeFilter, setActiveFilter] = useState<VehicleCategory>('All');

  const categories: { label: string; value: VehicleCategory }[] = [
    { label: 'All Models', value: 'All' },
    { label: 'Performance', value: 'Performance' },
    { label: 'Grand Touring', value: 'Grand Touring' },
    { label: 'Electric', value: 'Electric' },
    { label: 'Luxury SUV', value: 'SUV' },
  ];

  const filteredVehicles = useMemo(() => {
    if (activeFilter === 'All') return VEHICLES;
    return VEHICLES.filter((v) => v.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="collection" className="relative w-full py-28 md:py-36 bg-[#111317] text-[#F5F5F2] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B] mb-3">
              <span>AUREON FLEET</span>
              <span className="text-white/20">·</span>
              <span>2026 LINEUP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2]">
              FIND YOUR DRIVE.
            </h2>
            <p className="mt-4 text-base text-[#A1A5AE] max-w-xl font-light">
              Distinct personalities. Exceptional engineering. One uncompromising standard.
            </p>
          </div>

          {/* Interactive Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#17191E] border border-white/10 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                type="button"
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium rounded-sm transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B] ${
                  activeFilter === cat.value
                    ? 'bg-[#C8A96B] text-[#08090B] font-semibold shadow-sm'
                    : 'text-[#A1A5AE] hover:text-[#F5F5F2] hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#17191E] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#C8A96B]/50 transition-colors duration-300"
              >
                {/* Visual Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0C0E]">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - ${vehicle.categoryLabel}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17191E] via-transparent to-black/30" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] bg-[#08090B]/80 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-sm">
                      {vehicle.categoryLabel}
                    </span>
                  </div>

                  {/* Estimated Price Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-mono-tech tracking-wider text-[#A1A5AE] bg-[#08090B]/80 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-sm">
                      {vehicle.estimatedPrice}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2] group-hover:text-[#C8A96B] transition-colors">
                        {vehicle.name}
                      </h3>
                      <span className="text-xs font-mono-tech text-[#A1A5AE]">
                        {vehicle.modelCode}
                      </span>
                    </div>

                    <p className="text-xs font-mono-tech text-[#C8A96B] uppercase tracking-wider mb-3">
                      {vehicle.headline}
                    </p>

                    <p className="text-sm text-[#A1A5AE] leading-relaxed mb-6 font-light">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Key Metrics Strip */}
                  <div>
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 font-mono-tech text-center mb-6 bg-[#13151A]/60 rounded-sm">
                      <div>
                        <span className="block text-[10px] text-[#A1A5AE] uppercase tracking-widest mb-0.5">
                          Output
                        </span>
                        <span className="text-sm font-bold text-[#F5F5F2] tabular-nums">
                          {vehicle.specs.power}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#A1A5AE] uppercase tracking-widest mb-0.5">
                          0–100 km/h
                        </span>
                        <span className="text-sm font-bold text-[#C8A96B] tabular-nums">
                          {vehicle.specs.acceleration}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#A1A5AE] uppercase tracking-widest mb-0.5">
                          Top Speed
                        </span>
                        <span className="text-sm font-bold text-[#F5F5F2] tabular-nums">
                          {vehicle.specs.topSpeed}
                        </span>
                      </div>
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => onSelectVehicle(vehicle)}
                      type="button"
                      className="w-full flex items-center justify-between px-5 py-3.5 bg-[#1C1F26] hover:bg-[#C8A96B] hover:text-[#08090B] text-[#F5F5F2] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-200 group/btn focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
                    >
                      <span>Discover {vehicle.name}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
