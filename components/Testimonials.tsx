"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Partner Stories
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            What Our <span className="text-[#E8320A]">Partners Say</span>
          </h2>
          <p className="mt-4 font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            Trusted by 2,400+ restaurants, cafés, and distributors across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-orange-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#FFB347] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-dm text-[#1A0A00]/70 leading-relaxed italic flex-1">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-orange-50">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-syne font-bold text-white text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-syne font-bold text-sm text-[#1A0A00]">{t.name}</p>
                  <p className="font-dm text-xs text-[#1A0A00]/50">{t.role} · {t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
