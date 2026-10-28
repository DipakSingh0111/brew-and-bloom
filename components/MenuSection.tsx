"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight as ArrowRight,
  LuLeaf as Leaf,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
} from "react-icons/lu";
import { MenuSectionProps } from "@/types/brew-bloom.types";

export default function MenuSection({ data }: MenuSectionProps) {
  const [menuIndex, setMenuIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return null;

  const items = data.list || [];
  const maxMenuIndex = Math.max(0, items.length - itemsPerView);

  const handlePrev = () => {
    setMenuIndex((prev) => (prev <= 0 ? maxMenuIndex : prev - 1));
  };

  const handleNext = () => {
    setMenuIndex((prev) => (prev >= maxMenuIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="menu"
      className="bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6"
          >
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C5B2B]">
                {data.badge}
              </span>
              <div className="w-10 h-[1.5px] bg-[#8C5B2B]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif text-[#163b2b] leading-[1.15] mb-5">
              {data.heading?.main} <br />
              <span className="inline-flex items-center gap-2">
                {data.heading?.highlight}
                <motion.span
                  animate={{ rotate: [45, 60, 45] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  <Leaf className="w-6 h-6 text-[#6C8A6F] inline-block stroke-[1.5]" />
                </motion.span>
              </span>
            </h2>

            <p className="text-[#6B625B] text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              {data.description}
            </p>

            {/* CTA & Controls */}
            <div className="flex items-center gap-4 flex-wrap">
              {data.cta && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={data.cta.href}
                  className="group inline-flex items-center justify-between bg-[#163b2b] text-[#FAF7F2] pl-6 pr-2 py-2.5 rounded-full hover:bg-[#0d261c] transition-all duration-300 shadow-sm"
                >
                  <span className="text-xs font-semibold tracking-wider uppercase mr-4">
                    {data.cta.label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#C8924B] group-hover:bg-[#d99f57] flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.a>
              )}

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous menu item"
                  className="w-10 h-10 rounded-full border border-[#EBE4DA] bg-white flex items-center justify-center text-[#163b2b] hover:bg-[#163b2b] hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleNext}
                  aria-label="Next menu item"
                  className="w-10 h-10 rounded-full border border-[#EBE4DA] bg-white flex items-center justify-center text-[#163b2b] hover:bg-[#163b2b] hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Carousel Column */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${menuIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] group"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl overflow-hidden border border-[#EDE4D8] shadow-[0_4px_24px_rgba(22,59,43,0.04)] hover:shadow-[0_20px_45px_rgba(22,59,43,0.12)] transition-all duration-400 flex flex-col h-full isolate"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                      {/* Category Badge */}
                      <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8924B]" />
                        <span className="text-[10px] font-bold tracking-widest text-[#163b2b] uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-[#163b2b] leading-snug group-hover:text-[#8C5B2B] transition-colors duration-200">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-xs sm:text-[13px] text-[#6B625B] leading-relaxed line-clamp-1 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full border border-[#D8CABE] bg-white text-[#8C5B2B] group-hover:bg-[#8C5B2B] group-hover:border-[#8C5B2B] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxMenuIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setMenuIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    menuIndex === idx
                      ? "w-7 bg-[#8C5B2B]"
                      : "w-2 bg-[#D8CABE] hover:bg-[#8C5B2B]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
