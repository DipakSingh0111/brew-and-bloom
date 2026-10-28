"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight as ArrowRight,
  LuLeaf as Leaf,
  LuHeart as Heart,
  LuUsers as Users,
  LuClock as Clock,
} from "react-icons/lu";
import { AboutSectionProps } from "@/types/brew-bloom.types";

export default function AboutUs({ data }: AboutSectionProps) {
  if (!data) return null;

  const getAboutIcon = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <Heart size={18} className="text-[#C8924B]" />;
      case "leaf":
        return <Leaf size={18} className="text-[#C8924B]" />;
      case "users":
        return <Users size={18} className="text-[#C8924B]" />;
      case "clock":
        return <Clock size={18} className="text-[#C8924B]" />;
      default:
        return <Leaf size={18} className="text-[#C8924B]" />;
    }
  };

  return (
    <section
      id="about"
      className="bg-[#FAF6F0] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-y border-[#EBE4DA] overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Overlapping Images */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end lg:pr-6">
            <div className="relative w-full max-w-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-[84%] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-black/10"
              >
                <img
                  src={data.images?.main}
                  alt="Cozy café interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="absolute right-0 bottom-[-5%] w-[52%] aspect-[3/4] bg-white p-2.5 rounded-xl shadow-[0_20px_45px_rgba(0,0,0,0.18)] z-10 transition-transform duration-300"
              >
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={data.images?.secondary}
                    alt="Latte art and fresh bakes"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C5B2B]">
                {data.badge}
              </span>
              <div className="w-10 h-[1.5px] bg-[#8C5B2B]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif leading-[1.15] mb-4">
              <span className="text-[#163b2b] font-bold block">
                {data.heading?.main}
              </span>
              <span className="text-[#8C5B2B] font-bold block italic font-serif">
                {data.heading?.highlight}
              </span>
            </h2>

            <p className="text-[#6B625B] text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              {data.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {(data.list || []).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-[#EBE4DA] transition-shadow duration-300 hover:shadow-sm"
                >
                  <div className="p-2 rounded-full bg-[#163b2b]/10 text-[#163b2b] shrink-0">
                    {getAboutIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#163b2b]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#6B625B] mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {data.cta && (
              <div>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  href={data.cta.href}
                  className="group inline-flex items-center gap-3 bg-[#163b2b] text-white px-7 py-3 rounded-full hover:bg-[#0d261c] transition-all text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  {data.cta.label}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
