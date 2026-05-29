"use client";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import Link from "next/link";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Our SKUs
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            Premium <span className="text-[#E8320A]">Frozen Momos</span>
          </h2>
          <p className="mt-4 font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            FSSAI certified. No preservatives. Flash-frozen for maximum shelf life and taste.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#FFF8F0] rounded-2xl p-6 border border-orange-100 hover:border-[#E8320A] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{p.emoji}</span>
                <span className={`text-xs font-dm font-medium px-3 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>

              <h3 className="font-syne font-bold text-xl text-[#1A0A00] mb-1">{p.name}</h3>
              <p className="font-dm text-sm text-[#1A0A00]/60 mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-syne font-bold text-2xl text-[#E8320A]">₹{p.price}</span>
                    <span className="font-dm text-sm text-[#1A0A00]/40 line-through">₹{p.mrp}</span>
                  </div>
                  <p className="font-dm text-xs text-[#1A0A00]/50 mt-0.5">{p.moq}</p>
                </div>
                <div className="text-right">
                  <p className="font-syne font-bold text-[#E8320A] text-sm">{p.margin}</p>
                  <p className="font-dm text-xs text-[#1A0A00]/40">margin</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#E8320A] text-white font-dm font-medium px-8 py-4 rounded-full hover:bg-[#c92a07] transition-colors"
          >
            View All Products & Bulk Pricing →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
