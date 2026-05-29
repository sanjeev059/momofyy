"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";

function QtyControl({ product }: { product: typeof PRODUCTS[0] }) {
  const { getQty, setQty } = useCart();
  const qty = getQty(product.id);

  const update = (next: number) =>
    setQty(product.id, product.name, product.emoji, product.weight, product.price, next);

  if (qty === 0) {
    return (
      <button
        onClick={() => update(1)}
        className="w-full bg-[#E8320A] text-white font-syne font-bold text-sm py-3 rounded-xl hover:bg-[#c92a07] active:scale-95 transition-all"
      >
        + Add to Order
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => update(qty - 1)}
        className="w-10 h-10 rounded-xl bg-[#FFF8F0] border border-orange-100 font-bold text-[#E8320A] text-xl hover:bg-[#E8320A] hover:text-white transition-colors flex items-center justify-center"
      >
        −
      </button>
      <div className="flex-1 text-center">
        <p className="font-syne font-extrabold text-xl text-[#1A0A00]">{qty}</p>
        <p className="font-dm text-xs text-[#1A0A00]/40">₹{product.price * qty}</p>
      </div>
      <button
        onClick={() => update(qty + 1)}
        className="w-10 h-10 rounded-xl bg-[#E8320A] text-white font-bold text-xl hover:bg-[#c92a07] transition-colors flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}

function ProductCard({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

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
        <span className={`absolute top-3 left-3 text-xs font-dm font-semibold px-3 py-1 rounded-full shadow-md ${p.tagColor}`}>
          {p.tag}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-syne font-bold text-lg text-[#1A0A00] leading-snug">{p.name}</h3>
          <p className="font-dm text-xs text-[#1A0A00]/40 mt-0.5">{p.weight}</p>
        </div>

        <p className="font-dm text-sm text-[#1A0A00]/60 leading-relaxed flex-1 line-clamp-2">{p.desc}</p>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1.5">
            <span className="font-syne font-extrabold text-xl text-[#E8320A]">₹{p.price}</span>
            <span className="font-dm text-sm text-gray-400 line-through">₹{p.mrp}</span>
            <span className="font-dm text-xs text-gray-400">/pack</span>
          </div>
          <span className="font-dm text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-lg">
            {p.margin}
          </span>
        </div>

        {/* Quantity control */}
        <QtyControl product={p} />
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
            Add packs to your order, then submit — we&apos;ll confirm on WhatsApp.
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
