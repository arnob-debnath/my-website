
export interface Deity {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface PujaTime {
  id: string;
  name: string;
  time: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export interface SiteData {
  templeName: string;
  logoUrl: string;
  heroImageUrl: string;
  history: string;
  establishmentYear: string;
  importance: string;
  address: string;
  phone: string;
  email: string;
  facebookUrl: string;
  instagramUrl: string;
  deities: Deity[];
  schedule: PujaTime[];
  events: Event[];
  gallery: GalleryItem[];
  donationInfo: string;
  // Countdown fields
  countdownEnabled: boolean;
  countdownTitle: string;
  countdownTargetDate: string;
  countdownBannerImageUrl: string;
}
