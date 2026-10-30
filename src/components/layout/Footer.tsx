import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setSubscribeError('Please enter a valid email address.');
      return;
    }
    setSubscribeError('');
    setIsSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#08090B] text-[#F5F5F2] border-t border-white/10 pt-20 pb-12 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-[0.25em] text-[#F5F5F2] uppercase font-display mb-4"
            >
              <span>AUREON</span>
              <span className="text-[#C8A96B] font-light">MOTORS</span>
            </a>

            <p className="text-xs font-mono-tech tracking-[0.25em] text-[#C8A96B] uppercase mb-4">
              "ENGINEERED TO MOVE YOU."
            </p>

            <p className="text-sm text-[#A1A5AE] max-w-sm font-light leading-relaxed mb-6">
              Discover exceptional automobiles where precision engineering meets timeless design. Every detail is crafted to deliver a driving experience unlike any other.
            </p>

            <div className="text-xs font-mono-tech text-[#A1A5AE]/80 space-y-1">
              <div>Global Headquarters: Seestrasse 142, 8002 Zürich, Switzerland</div>
              <div>Concierge Desk: +41 44 215 8900 · atelier@aureon-motors.com</div>
              <div className="text-[11px] text-[#A1A5AE]/50 pt-2">
                * Fictional concept luxury automotive marque. All specifications are artistic concepts.
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-5">
              Automobiles
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#A1A5AE]">
              <li>
                <a href="#showcase" className="hover:text-[#F5F5F2] transition-colors">
                  Aureon GT-X
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#F5F5F2] transition-colors">
                  Aureon V12 R
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#F5F5F2] transition-colors">
                  Aureon E-Vision
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#F5F5F2] transition-colors">
                  Aureon X-Terra
                </a>
              </li>
            </ul>
          </div>

          {/* Brand & Atelier Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-5">
              Atelier
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#A1A5AE]">
              <li>
                <a href="#philosophy" className="hover:text-[#F5F5F2] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#F5F5F2] transition-colors">
                  Engineering Doctrine
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F5F5F2] transition-colors">
                  Visual Archive
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#F5F5F2] transition-colors">
                  Private Viewing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Gazette */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#C8A96B] mb-5">
              The Aureon Gazette
            </h4>
            <p className="text-xs text-[#A1A5AE] leading-relaxed mb-4 font-light">
              Receive confidential dispatches on limited allocations, proving-ground telemetry, and bespoke debuts.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#17191E] border border-[#C8A96B]/50 rounded-sm text-xs font-mono-tech text-[#C8A96B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to VIP dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-[#111317] border border-white/15 focus-within:border-[#C8A96B] rounded-sm p-1 transition-colors">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter private email..."
                    className="w-full px-3 py-2 text-xs bg-transparent text-[#F5F5F2] placeholder-[#A1A5AE]/50 focus:outline-none font-mono-tech"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="p-2 bg-[#C8A96B] text-[#08090B] rounded-xs hover:bg-[#d8bd82] transition-colors shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {subscribeError && (
                  <p className="text-red-400 text-[10px] font-mono-tech">{subscribeError}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#A1A5AE]">
          <div>
            © {new Date().getFullYear()} Aureon Motors Atelier AG. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onLegalClick('privacy')}
              type="button"
              className="hover:text-[#F5F5F2] transition-colors focus-visible:outline-none"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={() => onLegalClick('terms')}
              type="button"
              className="hover:text-[#F5F5F2] transition-colors focus-visible:outline-none"
            >
              Terms of Use
            </button>
            <span className="text-white/20">·</span>
            <span className="text-[#C8A96B]">Bespoke Craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
