"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Customer Stories
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            Trusted by <span className="text-[#E8320A]">2,400+</span> Businesses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#FFF8F0] rounded-2xl p-7 border border-orange-100 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#FFB347] text-lg">★</span>
                ))}
              </div>

              <p className="font-dm text-[#1A0A00]/70 leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8320A] flex items-center justify-center font-syne font-bold text-white text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-dm font-medium text-[#1A0A00]">{t.name}</p>
                  <p className="font-dm text-xs text-[#1A0A00]/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
