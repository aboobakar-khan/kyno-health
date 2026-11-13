"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-[#E7F3EF] via-[#F2F8F6] to-[#FAF8F5] text-[#132D2E]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 5-Star Rating Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-1.5"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FB923C] text-[#FB923C]" />
          ))}
          <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-[#0F2F28]/70">
            4.9 / 5 • 50,000+ Care Hours Delivered
          </span>
        </motion.div>

        {/* Featured Large Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[40px] font-light leading-[1.3] text-[#132D2E] tracking-tight">
            &ldquo;Finding a trustworthy caretaker and having emergency doctors on-call in Gurgaon gave our family complete peace of mind. Kyno Health made my mother&apos;s recovery at home dignified, safe, and completely worry-free.&rdquo;
          </blockquote>
        </motion.div>

        {/* Author Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-[#132D2E]/80 font-normal"
        >
          <p>
            <strong className="font-semibold text-[#132D2E]">Rajiv Malhotra</strong> &bull; DLF Phase 5, Gurgaon &bull;{" "}
            <span className="inline-flex items-center gap-1 text-[#00875A] font-medium text-xs">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Family
            </span>
          </p>
        </motion.div>

        {/* Direct CTA Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 md:mt-10"
        >
          <a
            href="/book-caretaker"
            className="inline-flex items-center justify-center rounded-full bg-[#FB923C] hover:bg-[#EA580C] text-white px-9 py-4 text-sm sm:text-base font-semibold shadow-md transition-all cursor-pointer"
          >
            Book Caretaker at Home
          </a>
        </motion.div>
      </div>
    </section>
  );
}
