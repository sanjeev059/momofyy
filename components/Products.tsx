"use client";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

function ProductCard({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [imgError, setImgError] = require("react").useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden border border-orange-100 hover:border-[#E8320A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Area */}
      <div className="relative w-full h-52 overflow-hidden">
        {!imgError ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Styled gradient placeholder until real photo is added */
          <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center gap-2`}>
            <span className="text-7xl drop-shadow-lg">{p.emoji}</span>
            <span className="text-white/80 text-xs font-dm font-medium tracking-wide uppercase">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Tag pill */}
        <span className={`absolute top-3 left-3 text-xs font-dm font-semibold px-3 py-1 rounded-full shadow ${p.tagColor}`}>
          {p.tag}
        </span>

        {/* Weight badge */}
        <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-dm px-2.5 py-1 rounded-full">
          {p.weight}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-syne font-bold text-lg text-[#1A0A00]">{p.name}</h3>
          <p className="font-dm text-sm text-[#1A0A00]/60 mt-1 leading-relaxed line-clamp-2">{p.desc}</p>
        </div>

        <div className="flex items-end justify-between pt-1 border-t border-orange-50">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-syne font-extrabold text-2xl text-[#E8320A]">₹{p.price}</span>
              <span className="font-dm text-sm text-[#1A0A00]/40 line-through">₹{p.mrp}</span>
            </div>
            <p className="font-dm text-xs text-[#1A0A00]/40 mt-0.5">per pack · {p.moq}</p>
          </div>
          <div className="text-right">
            <span className="inline-block bg-green-50 text-green-700 font-syne font-bold text-sm px-2.5 py-1 rounded-lg">
              {p.margin} margin
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
            No preservatives. Flash-frozen for maximum shelf life and taste. MOQ ₹3,000.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
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
