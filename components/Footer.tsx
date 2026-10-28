"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LuLeaf as Leaf,
  LuHeart as Heart,
} from "react-icons/lu";
import { FooterSectionProps } from "@/types/brew-bloom.types";
import { SocialIcon } from "@/components/Icons";

export default function Footer({ data, globalData }: FooterSectionProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  if (!data) return null;

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setNewsletterSent(true);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Artisans", href: "#artisans" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#0C261E] text-white pt-14 pb-8 border-t border-[#1a4436]">
      <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block mb-4">
              {data.logo?.src ? (
                <img
                  src={data.logo.src}
                  alt={globalData?.brand?.name || "Brew & Bloom"}
                  className="h-10 sm:h-11 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8924B] text-[#0C261E] flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="font-serif block text-2xl font-bold tracking-tight text-white">
                      {globalData?.brand?.name || "Brew & Bloom"}
                    </span>
                    <span className="block text-[8.5px] font-bold tracking-[0.3em] uppercase text-[#C8924B]">
                      {globalData?.brand?.subtitle || "CAFÉ & BAKERY"}
                    </span>
                  </div>
                </div>
              )}
            </a>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm mb-6">
              {data.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {(globalData?.socials || []).map((s) => (
                <motion.span
                  key={s.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8924B] hover:text-[#0C261E] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <SocialIcon icon={s.icon} />
                </motion.span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C8924B] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C8924B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Favorites */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C8924B] mb-4">
              Favorites
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              {(data.favorites || []).map((fav) => (
                <li
                  key={fav.name}
                  className="flex justify-between border-b border-white/5 pb-1"
                >
                  <span>{fav.name}</span>
                  <span className="text-[#C8924B] font-semibold">
                    {fav.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C8924B] mb-4">
              {data.newsletter?.title || "Morning Journal"}
            </h4>
            <p className="text-xs text-white/75 leading-relaxed mb-4">
              {data.newsletter?.description ||
                "Receive invitations to private cupping sessions and seasonal baker specials."}
            </p>

            <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="rounded-lg bg-white/10 border border-white/20 px-3.5 py-2 text-xs text-white placeholder-white/50 outline-none focus:border-[#C8924B]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="rounded-lg bg-[#C8924B] hover:bg-[#d99f57] text-[#0C261E] py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {newsletterSent ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-3">
          <p>
            {data.copyright ||
              "© 2026 Brew & Bloom Café & Bakery. All rights reserved."}
          </p>
          <p className="flex items-center gap-1.5">
            <span>Made with care & brewed to perfection</span>
            <Heart size={12} className="text-[#C8924B] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
