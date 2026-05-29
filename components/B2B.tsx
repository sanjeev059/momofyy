"use client";
import { motion } from "framer-motion";
import { B2B_CARDS } from "@/lib/constants";

export default function B2B() {
  return (
    <section id="b2b" className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            B2B Supply
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            B2B <span className="text-[#E8320A]">Solutions</span>
          </h2>
          <p className="mt-4 font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            From single restaurants to national distributors — we scale with your ambition.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {B2B_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-orange-100 hover:border-[#E8320A] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-syne font-bold text-xl text-[#1A0A00] mb-2">{card.title}</h3>
              <p className="font-dm text-[#1A0A00]/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
