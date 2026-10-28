"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuStar as Star } from "react-icons/lu";
import { TestimonialsSectionProps } from "@/types/brew-bloom.types";

export default function OurTestimonials({
  data,
}: TestimonialsSectionProps) {
  if (!data) return null;
  const list = data.list || [];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-t border-[#EBE4DA] overflow-hidden"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {list.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4DA] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C8924B] mb-4">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-[#4d4742] leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#C8924B]/30"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#163b2b]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#8C5B2B]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
