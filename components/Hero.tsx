"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { HeroSectionProps } from "@/types/brew-bloom.types";
import { LeafDecor } from "@/components/Icons";

export default function Hero({ data }: HeroSectionProps) {
  if (!data) return null;

  return (
    <section
      id="home"
      className="relative w-full bg-[#0d261c] overflow-hidden min-h-[560px] lg:h-[calc(100vh-85.5px)] lg:min-h-[560px] lg:max-h-[820px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={data.backgroundImage}
          alt={data.heading?.main || "Brew & Bloom Café"}
          className="w-full h-full object-cover object-right md:object-center select-none"
        />
        {/* Soft, light gradient only on the left edge for text contrast - background image stays crisp & clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130e]/85 via-[#07130e]/45 via-25% to-transparent to-45% z-10" />
      </div>

      <div className="relative z-20 max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-0 w-full">
        <div className="max-w-[700px] drop-shadow-sm">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white text-[10px] sm:text-[11px] xl:text-[12.5px] font-semibold tracking-[0.28em] uppercase"
          >
            <span>{data.badge}</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-4 sm:mt-5 font-serif font-bold tracking-[-0.015em] leading-[1.08] text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[66px]"
          >
            <span className="flex items-center gap-3 text-white">
              {data.heading?.main}
              <motion.div
                animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="shrink-0 inline-flex"
              >
                <LeafDecor className="w-7 h-7 sm:w-9 sm:h-9 xl:w-10 xl:h-10 text-[#C8924B] shrink-0" />
              </motion.div>
            </span>
            <span className="block text-[#C8924B]">
              {data.heading?.highlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 sm:mt-5 max-w-[480px] xl:max-w-[540px] text-white/95 text-sm sm:text-[15px] xl:text-[17px] leading-relaxed font-light"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4"
          >
            {data.primaryCta && (
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={data.primaryCta.href}
                className="group inline-flex items-center gap-4 xl:gap-5 rounded-full border-[1.5px] border-[#C8924B] bg-[#07130e]/75 hover:bg-[#07130e]/90 pl-6 xl:pl-7 pr-1.5 py-1.5 transition-all duration-300"
              >
                <span className="text-white text-[11px] xl:text-[12.5px] font-semibold tracking-[0.14em] uppercase">
                  {data.primaryCta.label}
                </span>
                <span className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#C8924B] group-hover:bg-[#d99f57] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            )}

            {data.secondaryCta && (
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white/80 hover:border-white bg-[#07130e]/60 hover:bg-[#07130e]/80 px-7 xl:px-8 h-[46px] xl:h-[50px] text-white text-[11px] xl:text-[12.5px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300"
              >
                {data.secondaryCta.label}
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Elegant Bottom Curved Transition into Features Bar */}
      <div className="absolute -bottom-px inset-x-0 z-20 pointer-events-none leading-none overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 sm:h-11 lg:h-14 block text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C420,58 1020,58 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
