import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { audioEngine } from '../../utils/audio';

interface NavbarProps {
  onExploreClick: () => void;
  onInquiryClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick, onInquiryClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const state = audioEngine.toggle();
    setAudioActive(state);
  };

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Private Salon', href: '#inquiry' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-[#08090B]/90 via-[#08090B]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-[0.25em] text-[#F5F5F2] uppercase font-display whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
          >
            <span>AUREON</span>
            <span className="text-[#C8A96B] font-light">MOTORS</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#A1A5AE]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#F5F5F2] whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96B] hover:after:w-full after:transition-all after:duration-250 focus-visible:outline-none focus-visible:text-[#F5F5F2]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Subtle Audio Atmosphere Switch */}
            <button
              onClick={handleToggleAudio}
              type="button"
              aria-label={audioActive ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
              title={audioActive ? 'Atmospheric Sound: Active (Click to mute)' : 'Atmospheric Sound: Muted (Click to enable)'}
              className={`p-2 rounded-full border transition-all text-xs flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B] ${
                audioActive
                  ? 'border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10 shadow-[0_0_12px_rgba(200,169,107,0.3)]'
                  : 'border-white/10 text-[#A1A5AE] hover:text-[#F5F5F2] hover:border-white/20'
              }`}
            >
              {audioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={onExploreClick}
              type="button"
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#08090B] bg-[#C8A96B] hover:bg-[#d8bd82] active:bg-[#b59556] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B]"
            >
              Explore Collection
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#F5F5F2] hover:text-[#C8A96B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#08090B]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-24 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            type="button"
            aria-label="Close navigation"
            className="absolute top-6 right-6 p-2 text-[#A1A5AE] hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-mono-tech mb-4">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-[#F5F5F2] hover:text-[#C8A96B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreClick();
              }}
              type="button"
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#C8A96B] text-[#08090B] rounded-sm text-center"
            >
              Explore Collection
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInquiryClick();
              }}
              type="button"
              className="w-full py-3 text-xs font-semibold uppercase tracking-[0.18em] border border-white/20 text-[#F5F5F2] rounded-sm text-center"
            >
              Private Salon Commission
            </button>
          </div>
        </div>
      )}
    </>
  );
};
