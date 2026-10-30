import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Client Discretion & Privacy Policy' : 'Terms of Allocation & Service';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#08090B]/90 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="relative w-full max-w-2xl max-h-[80vh] bg-[#111317] border border-white/15 rounded-sm p-6 sm:p-8 overflow-y-auto z-10 shadow-2xl space-y-6 text-sm text-[#A1A5AE]"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B]">
              <Shield className="w-4 h-4" />
              <span>{isPrivacy ? 'Legal Notice' : 'Terms of Allocation'}</span>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-[#A1A5AE] hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#F5F5F2]">
            {title}
          </h3>

          <div className="space-y-4 font-light leading-relaxed">
            <p>
              <strong>Fictional Concept Notice:</strong> Aureon Motors is an original fictional luxury automotive design concept created to showcase world-class creative engineering and design craft. All specifications, allocations, prices, and telemetry are artistic representations.
            </p>
            {isPrivacy ? (
              <>
                <p>
                  <strong>Client Confidentiality:</strong> Inquiries submitted through the private salon portal are encrypted and processed locally for demo interaction. Aureon does not sell or share client dossiers with third parties.
                </p>
                <p>
                  <strong>Cookies & Telemetry:</strong> This application does not employ invasive advertising trackers. Local session storage is utilized solely to preserve client audio preferences and configurator parameters.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Allocation Protocol:</strong> Concept models including the GT-X, V12 R, E-Vision, and X-Terra represent visionary engineering studies.
                </p>
                <p>
                  <strong>Intellectual Property:</strong> All original typography, UI architecture, styling compositions, and brand marks belong to the Aureon Motors digital design archive.
                </p>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="px-5 py-2.5 bg-[#C8A96B] text-[#08090B] font-semibold text-xs uppercase tracking-[0.16em] rounded-sm hover:bg-[#d8bd82] transition-colors"
            >
              Acknowledge & Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
