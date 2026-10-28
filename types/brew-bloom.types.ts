import rawJsonData from "@/data/brew-bloom.json";

export interface GlobalBrand {
  name: string;
  subtitle: string;
  tagline: string;
}

export interface GlobalContact {
  address: string;
  phone: string;
  email: string;
  hoursDays: string;
  hoursTime: string;
}

export interface GlobalSocial {
  name: string;
  url: string;
  icon: string;
}

export interface GlobalData {
  companyName: string;
  brand: GlobalBrand;
  contact: GlobalContact;
  socials: GlobalSocial[];
}

export interface HeaderMenuItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderData {
  logo: {
    src?: string;
    name?: string;
    subtitle?: string;
  };
  menu: HeaderMenuItem[];
  cta: {
    label: string;
    href: string;
  };
}

export interface HeroBannerData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  backgroundImage: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesData {
  list: FeatureItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
  };
  categories?: string[];
  list: MenuItem[];
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  images: {
    main: string;
    secondary: string;
  };
  list: AboutFeatureItem[];
  cta: {
    label: string;
    href: string;
  };
}

export interface ReservationBannerData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface ChefItem {
  id: number;
  name: string;
  role: string;
  signature?: string;
  credentials?: string;
  image: string;
  description?: string;
  quote?: string;
}

export interface ChefsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  list: ChefItem[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  featured: GalleryItem;
  list: GalleryItem[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  list: TestimonialItem[];
}

export interface ContactPageData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  info: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  form: {
    title: string;
    subtitle: string;
  };
}

export interface FooterData {
  logo?: {
    src?: string;
  };
  description: string;
  favorites: {
    name: string;
    price: string;
  }[];
  newsletter: {
    title: string;
    description: string;
  };
  copyright: string;
}

export interface BrewBloomSections {
  Global?: { variants: { BrewBloomGlobal1: GlobalData } };
  Header?: { variants: { BrewBloomHeader1: HeaderData } };
  HeroBanner?: { variants: { BrewBloomHeroBanner1: HeroBannerData } };
  Features?: { variants: { BrewBloomFeatures1: FeaturesData } };
  Menu?: { variants: { BrewBloomMenu1: MenuData } };
  AboutUs?: { variants: { BrewBloomAboutUs1: AboutUsData } };
  ReservationBanner?: { variants: { BrewBloomReservationBanner1: ReservationBannerData } };
  Chefs?: { variants: { BrewBloomChefs1: ChefsData } };
  Gallery?: { variants: { BrewBloomGallery1: GalleryData } };
  Testimonials?: { variants: { BrewBloomTestimonials1: TestimonialsData } };
  ContactPage?: { variants: { BrewBloomContactPage1: ContactPageData } };
  Footer?: { variants: { BrewBloomFooter1: FooterData } };
}

export interface BrewBloomTemplateData {
  categories: {
    BrewBloom: {
      sections: BrewBloomSections;
    };
  };
}

// Single centralized data source exported from types, exactly like Mavelle
export const brewBloomData = rawJsonData as unknown as BrewBloomTemplateData;
export const sectionsData = brewBloomData.categories.BrewBloom.sections;

// ==========================================
// Component Section Props (matching Mavelle structure)
// ==========================================

export interface NavbarSectionProps {
  data?: HeaderData;
}

export interface HeroSectionProps {
  data?: HeroBannerData;
}

export interface FeaturesSectionProps {
  data?: FeaturesData;
}

export interface MenuSectionProps {
  data?: MenuData;
}

export interface AboutSectionProps {
  data?: AboutUsData;
}

export interface ReservationBannerSectionProps {
  data?: ReservationBannerData;
}

export interface ChefsSectionProps {
  data?: ChefsData;
}

export interface GallerySectionProps {
  data?: GalleryData;
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface ContactSectionProps {
  data?: ContactPageData;
}

export interface FooterSectionProps {
  data?: FooterData;
  globalData?: GlobalData;
}

export interface SectionProps {
  Navbar: NavbarSectionProps;
  Hero: HeroSectionProps;
  Features: FeaturesSectionProps;
  Menu: MenuSectionProps;
  About: AboutSectionProps;
  ReservationBanner: ReservationBannerSectionProps;
  Chefs: ChefsSectionProps;
  Gallery: GallerySectionProps;
  Testimonials: TestimonialsSectionProps;
  Contact: ContactSectionProps;
  Footer: FooterSectionProps;
}
