"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa6";
import { ChefsSectionProps } from "@/types/brew-bloom.types";

export default function OurChefs({ data }: ChefsSectionProps) {
  if (!data) return null;
  const list = data.list || [];

  return (
    <section
      id="artisans"
      className="relative w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div
        className="absolute -top-10 -right-12 w-72 h-72 pointer-events-none opacity-10 text-[#C8924B]"
        aria-hidden="true"
      >
        <FaLeaf className="w-full h-full" />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((chef, idx) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-4 border border-[#EBE4DA] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/4] rounded-xl overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-[19px] text-[#163b2b] leading-tight">
                        {chef.name}
                      </h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C8924B] flex items-center gap-1.5 mt-0.5">
                        <span>{chef.role}</span>
                        <span className="inline-block w-4 h-[1.5px] bg-[#C8924B]" />
                      </p>
                    </div>
                    <span className="font-signature text-2xl sm:text-3xl text-[#C8924B] select-none shrink-0 transform -rotate-3">
                      {chef.signature || chef.name.split(" ")[0]}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B625B] leading-relaxed mt-3">
                    {chef.description || chef.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
