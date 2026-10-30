import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Gauge, Disc, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onInquire: (vehicleName: string) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ vehicle, onClose, onInquire }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (vehicle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#08090B]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#111317] border border-white/15 rounded-sm overflow-hidden shadow-2xl flex flex-col z-10"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#17191E]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#C8A96B]">
                {vehicle.categoryLabel}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs font-mono-tech text-[#A1A5AE]">
                CHASSIS CODE: {vehicle.modelCode}
              </span>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="p-1.5 text-[#A1A5AE] hover:text-white rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            {/* Split Visual & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 rounded-sm overflow-hidden border border-white/10 relative aspect-[16/10] bg-[#0A0C0E]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111317]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-tech">
                  <span className="bg-[#08090B]/80 px-2.5 py-1 rounded-sm border border-white/10 text-[#C8A96B]">
                    Active Atelier Render
                  </span>
                  <span className="text-[#F5F5F2] font-semibold bg-[#08090B]/80 px-2.5 py-1 rounded-sm border border-white/10">
                    {vehicle.estimatedPrice}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-display text-[#F5F5F2]">
                  {vehicle.name}
                </h3>
                <p className="text-xs font-mono-tech uppercase tracking-wider text-[#C8A96B]">
                  {vehicle.headline}
                </p>
                <p className="text-sm text-[#A1A5AE] leading-relaxed font-light">
                  {vehicle.detailedOverview}
                </p>

                {/* Exterior Atelier Finish Selection */}
                <div className="pt-2">
                  <span className="block text-[11px] font-mono-tech uppercase tracking-widest text-[#A1A5AE] mb-2">
                    Bespoke Atelier Finish: <strong className="text-white font-normal">{vehicle.availableColors[selectedColorIndex].name}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    {vehicle.availableColors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColorIndex(idx)}
                        type="button"
                        aria-label={`Select ${color.name}`}
                        className={`w-5 h-5 rounded-full border transition-all ${
                          selectedColorIndex === idx
                            ? 'border-[#C8A96B] scale-125 ring-2 ring-white/50'
                            : 'border-white/20 hover:border-white/60'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive Technical Matrix */}
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-4">
                Technical Blueprint
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-[#17191E] border border-white/10 rounded-sm">
                  <span className="block text-[10px] font-mono-tech text-[#A1A5AE] uppercase">Power Output</span>
                  <span className="text-xl font-extrabold font-mono-tech text-[#F5F5F2]">{vehicle.specs.power}</span>
                </div>
                <div className="p-4 bg-[#17191E] border border-white/10 rounded-sm">
                  <span className="block text-[10px] font-mono-tech text-[#A1A5AE] uppercase">Acceleration</span>
                  <span className="text-xl font-extrabold font-mono-tech text-[#C8A96B]">{vehicle.specs.acceleration}</span>
                </div>
                <div className="p-4 bg-[#17191E] border border-white/10 rounded-sm">
                  <span className="block text-[10px] font-mono-tech text-[#A1A5AE] uppercase">Maximum Velocity</span>
                  <span className="text-xl font-extrabold font-mono-tech text-[#F5F5F2]">{vehicle.specs.topSpeed}</span>
                </div>
                <div className="p-4 bg-[#17191E] border border-white/10 rounded-sm">
                  <span className="block text-[10px] font-mono-tech text-[#A1A5AE] uppercase">Drivetrain</span>
                  <span className="text-sm font-bold font-mono-tech text-[#F5F5F2]">{vehicle.specs.drivetrain}</span>
                </div>
              </div>
            </div>

            {/* Chassis Dimensions & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#17191E] border border-white/10 rounded-sm p-6">
                <h4 className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-4">
                  Chassis Dimensions
                </h4>
                <div className="space-y-3 font-mono-tech text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A5AE]">Overall Length:</span>
                    <span className="text-white font-medium">{vehicle.dimensions.length}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A5AE]">Overall Width:</span>
                    <span className="text-white font-medium">{vehicle.dimensions.width}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A5AE]">Overall Height:</span>
                    <span className="text-white font-medium">{vehicle.dimensions.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A5AE]">Wheelbase:</span>
                    <span className="text-white font-medium">{vehicle.dimensions.wheelbase}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#17191E] border border-white/10 rounded-sm p-6">
                <h4 className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-4">
                  Engineering Highlights
                </h4>
                <ul className="space-y-3">
                  {vehicle.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#A1A5AE]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#17191E] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono-tech text-[#A1A5AE]">
              Exclusive Allocation Inquiry · Client Liaison Assigned Upon Request
            </span>

            <button
              onClick={() => {
                onClose();
                onInquire(vehicle.name);
              }}
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-[#C8A96B] hover:bg-[#d8bd82] text-[#08090B] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Private Allocation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
