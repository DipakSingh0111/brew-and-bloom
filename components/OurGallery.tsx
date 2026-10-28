"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuX as X,
  LuZoomIn as ZoomIn,
} from "react-icons/lu";
import { GallerySectionProps } from "@/types/brew-bloom.types";

export default function OurGallery({ data }: GallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!data) return null;

  const featured = data.featured;
  const list = data.list || [];
  const allImages = featured ? [featured, ...list] : list;

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + allImages.length) % allImages.length,
    );
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % allImages.length,
    );
  };

  return (
    <section
      id="gallery"
      className="bg-[#FAF6F0] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-t border-[#EBE4DA]"
    >
      <div className="max-w-[1340px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-3 mb-2.5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C5B2B]">
              {data.badge}
            </span>
            <div className="w-10 h-[1.5px] bg-[#8C5B2B]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#163b2b] leading-tight mb-3">
            {data.heading?.main}{" "}
            <span className="text-[#C8924B]">{data.heading?.highlight}</span>
          </h2>

          <p className="text-[#6B625B] text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Featured Large Tile */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              onClick={() => setLightboxIndex(0)}
              className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
            >
              <img
                src={featured.image}
                alt={featured.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C8924B]">
                  {featured.category}
                </span>
                <h3 className="font-serif font-bold text-xl">
                  {featured.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs mt-2 text-white/80">
                  <ZoomIn size={14} /> Click to expand
                </span>
              </div>
            </motion.div>
          )}

          {/* 4 Smaller Grid Tiles */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
            {list.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightboxIndex(featured ? i + 1 : i)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm"
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C8924B]">
                    {img.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base">
                    {img.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] mt-1 text-white/80">
                    <ZoomIn size={12} /> View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && allImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={handleLightboxPrev}
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={allImages[lightboxIndex].image}
                alt={allImages[lightboxIndex].alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              <div className="text-center mt-3 text-white">
                <p className="font-serif text-lg font-bold">
                  {allImages[lightboxIndex].title}
                </p>
                <p className="text-xs text-[#C8924B] uppercase tracking-wider">
                  {allImages[lightboxIndex].category}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={handleLightboxNext}
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
