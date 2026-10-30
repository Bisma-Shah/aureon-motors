import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Gauge, Disc, Compass, Layers } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';

interface FeaturedVehicleProps {
  onDiscoverVehicle: (vehicle: Vehicle) => void;
}

export const FeaturedVehicle: React.FC<FeaturedVehicleProps> = ({ onDiscoverVehicle }) => {
  const gtx = VEHICLES[0];
  const [selectedColor, setSelectedColor] = useState(gtx.availableColors[0]);
  const [activeSpecIndex, setActiveSpecIndex] = useState<number | null>(null);

  const specsList = [
    { label: 'MAX POWER', value: '620', unit: 'HP', icon: Gauge, note: 'Twin-Turbocharged 4.0L' },
    { label: 'ACCELERATION', value: '3.2', unit: 'SEC', icon: Compass, note: '0–100 km/h Launch Control' },
    { label: 'TOP VELOCITY', value: '320', unit: 'KM/H', icon: Disc, note: 'Electronically Governed' },
    { label: 'TRANSMISSION', value: '8-SPD', unit: 'DCT', icon: Layers, note: 'Dual-Clutch Shift Logic' },
    { label: 'DRIVETRAIN', value: 'AWD', unit: 'VECTOR', icon: Compass, note: 'Dynamic Mechanical Split' },
  ];

  return (
    <section id="showcase" className="relative w-full py-28 md:py-36 bg-[#08090B] text-[#F5F5F2] overflow-hidden border-t border-white/10">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8A96B]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B] mb-3">
              <span>FLAGSHIP SHOWCASE</span>
              <span className="text-white/20">·</span>
              <span>{gtx.categoryLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display tracking-tight text-[#F5F5F2] leading-tight">
              {gtx.name} <br />
              <span className="text-[#C8A96B]">{gtx.headline}</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#A1A5AE] leading-relaxed mb-6 font-light">
              {gtx.description}
            </p>
            <button
              onClick={() => onDiscoverVehicle(gtx)}
              type="button"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F5F2] hover:text-[#C8A96B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#C8A96B]"
            >
              <span>Discover the GT-X Spec Sheet</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Hero Vehicle Display Card */}
        <div className="relative rounded-sm overflow-hidden border border-white/10 bg-[#111317] group">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0C0E]">
            <motion.img
              initial={{ scale: 1.05, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src={gtx.image}
              alt="Aureon GT-X Coupe Studio Profile in dark matte finish"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Bottom Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-90" />

            {/* Color Atelier Selector Pill */}
            <div className="absolute top-6 right-6 bg-[#08090B]/85 backdrop-blur-md border border-white/10 p-3 rounded-sm flex items-center gap-3">
              <span className="text-[10px] font-mono-tech tracking-wider uppercase text-[#A1A5AE]">
                Atelier: <strong className="text-white font-normal">{selectedColor.name}</strong>
              </span>
              <div className="flex items-center gap-1.5">
                {gtx.availableColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    type="button"
                    aria-label={`Select ${color.name} finish`}
                    className={`w-4 h-4 rounded-full border transition-all ${
                      selectedColor.name === color.name
                        ? 'border-[#C8A96B] scale-110 shadow-[0_0_8px_rgba(200,169,107,0.4)] ring-1 ring-white/50'
                        : 'border-white/20 hover:border-white/60'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Concept Prototype Watermark / Badge */}
            <div className="absolute bottom-6 left-6 text-xs font-mono-tech text-[#A1A5AE]/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A96B]" />
              <span>GTX-400 AERODYNAMIC PROTOTYPE // LIMITED SERIES</span>
            </div>
          </div>

          {/* Technical Specification Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-t border-white/10 bg-[#111317]">
            {specsList.map((spec, index) => (
              <div
                key={spec.label}
                onMouseEnter={() => setActiveSpecIndex(index)}
                onMouseLeave={() => setActiveSpecIndex(null)}
                className={`p-6 transition-all duration-200 cursor-default ${
                  activeSpecIndex === index ? 'bg-[#17191E]' : 'hover:bg-[#15171C]'
                }`}
              >
                <span className="block text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#A1A5AE] mb-2">
                  {spec.label}
                </span>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono-tech tracking-tight text-[#F5F5F2] tabular-nums">
                    {spec.value}
                  </span>
                  <span className="text-xs font-mono-tech font-semibold text-[#C8A96B]">
                    {spec.unit}
                  </span>
                </div>
                <span className="block text-[11px] text-[#A1A5AE]/80 font-light truncate">
                  {spec.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Disclaimer Notice */}
        <p className="mt-4 text-[11px] text-[#A1A5AE]/60 font-mono-tech text-right">
          * Concept vehicle specifications. Values calibrated under simulated test-bench conditions.
        </p>
      </div>
    </section>
  );
};
