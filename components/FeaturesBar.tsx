"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeaturesSectionProps } from "@/types/brew-bloom.types";
import { FeatureIcon } from "@/components/Icons";

export default function FeaturesBar({ data }: FeaturesSectionProps) {
  if (!data) return null;
  const list = data.list || [];

  return (
    <section className="w-full bg-white border-b border-[#EBE4DA]">
      <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 py-7 sm:py-9">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {list.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-3.5 transition-transform duration-300"
            >
              <div className="w-13 h-13 rounded-xl bg-[#FAF7F2] border border-[#EBE4DA] group-hover:border-[#C8924B]/50 flex items-center justify-center shrink-0 transition-colors duration-300 p-2.5">
                <FeatureIcon type={item.icon} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[15px] sm:text-[16px] text-[#163b2b] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#6B625B] leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
