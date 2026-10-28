"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight as ArrowRight,
  LuLeaf as Leaf,
} from "react-icons/lu";
import { ReservationBannerSectionProps } from "@/types/brew-bloom.types";

export default function ReservationBanner({
  data,
}: ReservationBannerSectionProps) {
  if (!data) return null;

  return (
    <section
      id="reservation"
      className="relative w-full overflow-hidden bg-[#0A1410] min-h-[340px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={data.backgroundImage}
          alt={data.heading?.main || "Reserve table"}
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Gradient only behind text on left, right side is 100% clear HD image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06110d] via-[#06110d]/95 via-40% md:via-48% to-transparent to-72% z-10" />
      </div>

      <div className="relative z-20 max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C8924B]">
              {data.badge}
            </span>
            <div className="w-10 h-[1.5px] bg-[#C8924B]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif leading-[1.12] mb-4">
            <span className="text-[#FAF7F2] font-normal inline-flex items-center gap-3">
              {data.heading?.main}
              <Leaf className="w-7 h-7 text-[#C8924B] transform rotate-45 stroke-[1.5] inline-block -mt-1 transition-transform duration-500 hover:rotate-90" />
            </span>
            <br />
            <span className="text-[#C8924B] font-serif font-normal block mt-1">
              {data.heading?.highlight}
            </span>
          </h2>

          <p className="text-[#E2D9CF] text-sm sm:text-base font-light leading-relaxed mb-7 max-w-xl">
            {data.description}
          </p>

          {data.cta && (
            <div>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={data.cta.href}
                className="group inline-flex items-center justify-between bg-[#163b2b] hover:bg-[#0e271c] text-[#FAF7F2] border border-[#C8924B]/60 hover:border-[#C8924B] pl-7 pr-2 py-2.5 rounded-full transition-all duration-300 shadow-xl"
              >
                <span className="text-xs font-semibold tracking-wider mr-6 uppercase text-[#EADEC9] group-hover:text-white">
                  {data.cta.label}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#C8924B] group-hover:bg-[#d99f57] flex items-center justify-center text-white group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
