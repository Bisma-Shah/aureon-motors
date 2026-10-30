import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturedVehicle } from './components/sections/FeaturedVehicle';
import { VehicleCollection } from './components/sections/VehicleCollection';
import { GallerySection } from './components/sections/GallerySection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { PerformanceSection } from './components/sections/PerformanceSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { VehicleDetailModal } from './components/modals/VehicleDetailModal';
import { GalleryLightbox } from './components/modals/GalleryLightbox';
import { LegalModal } from './components/modals/LegalModal';
import { Vehicle, GalleryItem } from './types/vehicle';
import { GALLERY_ITEMS } from './data/vehicles';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (_item: GalleryItem, index: number) => {
    setActiveGalleryIndex(index);
  };

  const handleInquireFromModal = (vehicleName: string) => {
    scrollToSection('inquiry');
    // Pre-populate inquiry form selector if available
    const select = document.querySelector('select') as HTMLSelectElement | null;
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.includes(vehicleName)) {
          select.selectedIndex = i;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          break;
        }
      }
    }
  };

  const currentGalleryItem = activeGalleryIndex !== null ? GALLERY_ITEMS[activeGalleryIndex] : null;

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] flex flex-col selection:bg-[#C8A96B] selection:text-[#08090B]">
      {/* Navigation */}
      <Navbar
        onExploreClick={() => scrollToSection('collection')}
        onInquiryClick={() => scrollToSection('inquiry')}
      />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* Cinematic Hero */}
        <HeroSection
          onExploreClick={() => scrollToSection('collection')}
          onStoryClick={() => scrollToSection('philosophy')}
        />

        {/* Flagship Vehicle Showcase */}
        <FeaturedVehicle
          onDiscoverVehicle={(v) => setSelectedVehicle(v)}
        />

        {/* Explore The Collection */}
        <VehicleCollection
          onSelectVehicle={(v) => setSelectedVehicle(v)}
        />

        {/* Immersive Photography Gallery */}
        <GallerySection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Philosophy & Engineering Doctrine */}
        <PhilosophySection />

        {/* Performance Telemetry Benchmarks */}
        <PerformanceSection />

        {/* Private Salon & Client Commissioning */}
        <ExperienceSection />

        {/* Final Premium CTA */}
        <FinalCTA
          onExploreClick={() => scrollToSection('collection')}
          onContactClick={() => scrollToSection('inquiry')}
        />
      </main>

      {/* Footer */}
      <Footer
        onLegalClick={(type) => setLegalModalType(type)}
      />

      {/* Modals & Overlays */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onInquire={handleInquireFromModal}
      />

      <GalleryLightbox
        item={currentGalleryItem}
        currentIndex={activeGalleryIndex ?? 0}
        onClose={() => setActiveGalleryIndex(null)}
        onNavigate={(newIndex) => setActiveGalleryIndex(newIndex)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
