"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "918867361454";

function ProductCard({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const waMsg = encodeURIComponent(`Hi Momofy! I want to order ${p.name} (₹${p.price}/pack). Please share details.`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-gray-50">
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
          <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
            <span className="text-8xl drop-shadow-lg">{p.emoji}</span>
          </div>
        )}
        {/* Tag */}
        <span className={`absolute top-3 left-3 text-xs font-dm font-semibold px-3 py-1 rounded-full shadow-md ${p.tagColor}`}>
          {p.tag}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Name + weight */}
        <div>
          <h3 className="font-syne font-bold text-lg text-[#1A0A00] leading-snug">
            {p.name}
          </h3>
          <p className="font-dm text-xs text-[#1A0A00]/40 mt-0.5">{p.weight}</p>
        </div>

        {/* Description */}
        <p className="font-dm text-sm text-[#1A0A00]/60 leading-relaxed flex-1">
          {p.desc}
        </p>

        {/* Price row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="font-syne font-extrabold text-2xl text-[#E8320A]">₹{p.price}</span>
            <span className="font-dm text-sm text-gray-400 line-through">₹{p.mrp}</span>
            <span className="font-dm text-xs text-gray-400">/Packet</span>
          </div>
          <span className="font-dm text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-lg">
            {p.margin} margin
          </span>
        </div>

        {/* Buy Now */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 w-full text-center bg-[#E8320A] text-white font-syne font-bold text-sm py-3 rounded-xl hover:bg-[#c92a07] active:scale-95 transition-all"
        >
          Buy Now
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Our Products
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            Our <span className="text-[#E8320A]">Products</span>
          </h2>
          <p className="mt-4 font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            No preservatives. Flash-frozen for maximum shelf life and taste.
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
            className="inline-flex items-center gap-2 border-2 border-[#E8320A] text-[#E8320A] font-syne font-bold px-8 py-4 rounded-full hover:bg-[#E8320A] hover:text-white transition-all"
          >
            View All Products & Bulk Pricing →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
