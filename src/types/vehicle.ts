export type VehicleCategory = 'All' | 'Performance' | 'Grand Touring' | 'Electric' | 'SUV';

export interface VehicleSpecs {
  power: string;
  acceleration: string;
  topSpeed: string;
  transmission: string;
  drivetrain: string;
  torque?: string;
  range?: string;
  curbWeight?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  modelCode: string;
  category: VehicleCategory;
  categoryLabel: string;
  headline: string;
  description: string;
  detailedOverview: string;
  image: string;
  specs: VehicleSpecs;
  estimatedPrice: string;
  highlights: string[];
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
  };
  availableColors: {
    name: string;
    hex: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  aspect: 'wide' | 'tall' | 'standard';
  description: string;
}
