"use client";

import React from "react";
import { sectionsData } from "@/types/brew-bloom.types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import MenuSection from "@/components/MenuSection";
import AboutUs from "@/components/AboutUs";
import ReservationBanner from "@/components/ReservationBanner";
import OurChefs from "@/components/OurChefs";
import OurGallery from "@/components/OurGallery";
import OurTestimonials from "@/components/OurTestimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionData = sectionsData;

  if (!sectionData) {
    return <div className="p-8 text-center text-stone-500">Loading...</div>;
  }

  return (
    <div className="w-full bg-[#FAF7F2] font-sans selection:bg-[#C8924B]/20 selection:text-[#163b2b]">
      <Navbar data={sectionData.Header?.variants?.BrewBloomHeader1} />
      <Hero data={sectionData.HeroBanner?.variants?.BrewBloomHeroBanner1} />
      <FeaturesBar data={sectionData.Features?.variants?.BrewBloomFeatures1} />
      <MenuSection data={sectionData.Menu?.variants?.BrewBloomMenu1} />
      <AboutUs data={sectionData.AboutUs?.variants?.BrewBloomAboutUs1} />
      <ReservationBanner
        data={sectionData.ReservationBanner?.variants?.BrewBloomReservationBanner1}
      />
      <OurChefs data={sectionData.Chefs?.variants?.BrewBloomChefs1} />
      <OurGallery data={sectionData.Gallery?.variants?.BrewBloomGallery1} />
      <OurTestimonials
        data={sectionData.Testimonials?.variants?.BrewBloomTestimonials1}
      />
      <ContactSection
        data={sectionData.ContactPage?.variants?.BrewBloomContactPage1}
      />
      <Footer
        data={sectionData.Footer?.variants?.BrewBloomFooter1}
        globalData={sectionData.Global?.variants?.BrewBloomGlobal1}
      />
    </div>
  );
}
