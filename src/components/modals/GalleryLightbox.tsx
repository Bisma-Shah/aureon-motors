import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/vehicles';
import { GalleryItem } from '../../types/vehicle';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % GALLERY_ITEMS.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, currentIndex, onClose, onNavigate]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#08090B]/95 backdrop-blur-2xl"
        />

        {/* Top Control Bar */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between text-xs font-mono-tech text-[#A1A5AE]">
          <div className="flex items-center gap-3">
            <span className="text-[#C8A96B] tracking-[0.2em] uppercase font-bold">
              {item.category}
            </span>
            <span className="text-white/20">/</span>
            <span>
              EXHIBIT {currentIndex + 1} OF {GALLERY_ITEMS.length}
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close image viewer"
            className="p-2 text-[#A1A5AE] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
          }}
          type="button"
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-[#111317]/80 border border-white/15 text-white hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % GALLERY_ITEMS.length);
          }}
          type="button"
          aria-label="Next image"
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-[#111317]/80 border border-white/15 text-white hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Area */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-6xl w-full flex flex-col items-center max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-sm overflow-hidden border border-white/15 shadow-2xl max-h-[72vh] flex items-center justify-center bg-[#08090B]">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] w-auto object-contain"
            />
          </div>

          {/* Description Caption */}
          <div className="mt-5 text-center max-w-2xl px-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#F5F5F2] mb-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A5AE] font-light">
              {item.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
