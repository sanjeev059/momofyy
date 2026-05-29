"use client";
import { motion } from "framer-motion";
import { WHY_CARDS } from "@/lib/constants";

export default function WhyMomofy() {
  return (
    <section id="why" className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A0A00]">
            Why <span className="text-[#E8320A]">Momofy</span>?
          </h2>
          <p className="mt-3 font-dm text-base sm:text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            We&apos;re not just a momo supplier. We&apos;re your business partner from factory to plate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-7 border border-orange-100 hover:border-[#E8320A] hover:-translate-y-1 transition-all duration-300 cursor-default"
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
