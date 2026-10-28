"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LuMapPin as MapPin,
  LuPhone as Phone,
  LuMail as Mail,
  LuClock as Clock,
  LuSend as Send,
} from "react-icons/lu";
import { FiCheckCircle as CheckCircle2 } from "react-icons/fi";
import { ContactSectionProps } from "@/types/brew-bloom.types";

export default function ContactSection({ data }: ContactSectionProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Table Reservation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-t border-[#EBE4DA]"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C5B2B]">
                  {data.badge}
                </span>
                <div className="w-10 h-[1.5px] bg-[#8C5B2B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#163b2b] leading-tight mb-4">
                {data.heading?.main}{" "}
                <span className="text-[#C8924B]">
                  {data.heading?.highlight}
                </span>
              </h2>

              <p className="text-[#6B625B] text-sm leading-relaxed mb-8">
                {data.description}
              </p>

              <div className="space-y-4 text-sm text-[#3d3834]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#163b2b]/10 text-[#163b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-[#C8924B]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163b2b]">Our Location</p>
                    <p className="text-xs text-[#6B625B] mt-0.5">
                      {data.info?.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#163b2b]/10 text-[#163b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} className="text-[#C8924B]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163b2b]">
                      Phone Inquiries
                    </p>
                    <p className="text-xs text-[#6B625B] mt-0.5">
                      {data.info?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#163b2b]/10 text-[#163b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} className="text-[#C8924B]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163b2b]">Email Us</p>
                    <p className="text-xs text-[#6B625B] mt-0.5">
                      {data.info?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#163b2b]/10 text-[#163b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} className="text-[#C8924B]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163b2b]">Café Hours</p>
                    <p className="text-xs text-[#6B625B] mt-0.5">
                      {data.info?.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EBE4DA] shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-serif font-bold text-xl text-[#163b2b] mb-1">
                {data.form?.title || "Send a Note or Book a Table"}
              </h3>
              <p className="text-xs text-[#6B625B] mb-6">
                {data.form?.subtitle ||
                  "Fill in your details and our team will get back to you promptly."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#163b2b] mb-1.5">
                    Your Name <span className="text-[#C8924B]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Johnson"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-[#EBE4DA] px-3.5 py-2.5 text-xs text-[#163b2b] outline-none transition focus:border-[#C8924B] focus:ring-1 focus:ring-[#C8924B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#163b2b] mb-1.5">
                    Email Address <span className="text-[#C8924B]">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-[#EBE4DA] px-3.5 py-2.5 text-xs text-[#163b2b] outline-none transition focus:border-[#C8924B] focus:ring-1 focus:ring-[#C8924B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#163b2b] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-[#EBE4DA] px-3.5 py-2.5 text-xs text-[#163b2b] outline-none transition focus:border-[#C8924B] focus:ring-1 focus:ring-[#C8924B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#163b2b] mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full rounded-lg border border-[#EBE4DA] px-3.5 py-2.5 text-xs text-[#163b2b] bg-white outline-none transition focus:border-[#C8924B] focus:ring-1 focus:ring-[#C8924B]"
                  >
                    <option>Table Reservation</option>
                    <option>Catering & Private Events</option>
                    <option>General Question / Feedback</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#163b2b] mb-1.5">
                  Your Message <span className="text-[#C8924B]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us how many guests, preferred date/time, or details..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#EBE4DA] px-3.5 py-2.5 text-xs text-[#163b2b] outline-none transition focus:border-[#C8924B] focus:ring-1 focus:ring-[#C8924B]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-full bg-[#163b2b] hover:bg-[#0d261c] text-[#FAF7F2] py-3 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                {submitted
                  ? "Thank You — Your Request Is Received!"
                  : "Send Message"}
                <Send size={14} className="text-[#C8924B]" />
              </motion.button>

              {submitted && (
                <p className="mt-3 text-center text-xs text-[#163b2b] font-medium inline-flex items-center justify-center gap-1.5 w-full">
                  <CheckCircle2 size={15} className="text-[#163b2b]" />
                  We have received your message and will confirm shortly!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
