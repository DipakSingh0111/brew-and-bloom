"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight as ArrowRight,
  LuLeaf as Leaf,
  LuMenu as MenuIcon,
  LuX as X,
} from "react-icons/lu";
import { NavbarSectionProps } from "@/types/brew-bloom.types";

export default function Navbar({ data }: NavbarSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  if (!data) return null;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full sticky top-0 z-50"
    >
      <div className="w-full h-[3.5px] bg-[#163b2b]" />

      <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#EBE4DA] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 h-[76px] sm:h-[82px] flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition"
            aria-label="Brew & Bloom Home"
          >
            {data.logo?.src ? (
              <img
                src={data.logo.src}
                alt={data.logo.name || "Brew & Bloom"}
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-[#163b2b] text-[#C8924B] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-12 shadow-sm">
                  <Leaf className="w-5 h-5 text-[#C8924B]" />
                </div>
                <div className="leading-tight">
                  <span className="font-serif block text-2xl font-bold tracking-tight text-[#163b2b]">
                    {data.logo?.name || "Brew & Bloom"}
                  </span>
                  <span className="block text-[8.5px] font-bold tracking-[0.3em] uppercase text-[#8C5B2B]">
                    {data.logo?.subtitle || "CAFÉ & BAKERY"}
                  </span>
                </div>
              </>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {(data.menu || []).map((item) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`relative text-[15px] font-medium tracking-wide transition-colors duration-200 py-1.5 ${
                    isActive
                      ? "text-[#163b2b] font-semibold"
                      : "text-[#5e5852] hover:text-[#163b2b]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C8924B] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            {data.cta && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={data.cta.href}
                className="group hidden sm:inline-flex items-center gap-3.5 rounded-full bg-[#163b2b] hover:bg-[#0d261c] text-[#FAF7F2] pl-6 pr-2 py-2 transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(22,59,43,0.3)]"
              >
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-white">
                  {data.cta.label}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#C8924B] group-hover:bg-[#d99f57] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-[#EBE4DA] text-[#163b2b] hover:bg-stone-50"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#EBE4DA] bg-white px-6 py-5 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {(data.menu || []).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className="text-base font-medium py-2.5 border-b border-stone-100 text-[#3d3834] hover:text-[#163b2b]"
                  >
                    {item.label}
                  </a>
                ))}
                {data.cta && (
                  <a
                    href={data.cta.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#163b2b] py-3 text-sm font-semibold uppercase tracking-wider text-white"
                  >
                    {data.cta.label} <ArrowRight size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
}
