"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";

function QuantityControl({ p }: { p: typeof PRODUCTS[0] }) {
  const { setQty, getQty } = useCart();
  const qty = getQty(p.id);

  if (qty === 0) {
    return (
      <button
        onClick={() => setQty(p.id, p.name, p.emoji, p.weight, p.price, 1)}
        className="w-full flex items-center justify-center gap-2 bg-[#E8320A] text-white font-syne font-bold text-sm py-3 rounded-xl hover:bg-[#c92a07] active:scale-95 transition-all"
      >
        <span className="text-base leading-none">+</span>
        Add to Order
      </button>
    );
  }

  return (
    <div className="space-y-2">
      {/* +/- row */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setQty(p.id, p.name, p.emoji, p.weight, p.price, qty - 1)}
          className="w-10 h-10 rounded-xl bg-[#1A0A00]/8 border border-[#1A0A00]/15 text-[#1A0A00] font-bold text-lg flex items-center justify-center hover:bg-[#E8320A] hover:text-white hover:border-[#E8320A] transition-all active:scale-90"
        >
          −
        </button>
        <div className="flex-1 text-center">
          <span className="font-syne font-bold text-lg text-[#1A0A00]">{qty}</span>
          <span className="font-dm text-xs text-[#1A0A00]/50 ml-1">pack{qty > 1 ? "s" : ""}</span>
        </div>
        <button
          onClick={() => setQty(p.id, p.name, p.emoji, p.weight, p.price, qty + 1)}
          className="w-10 h-10 rounded-xl bg-[#E8320A] text-white font-bold text-lg flex items-center justify-center hover:bg-[#c92a07] transition-all active:scale-90"
        >
          +
        </button>
      </div>
      {/* subtotal */}
      <p className="text-center font-dm text-xs text-[#1A0A00]/50">
        Subtotal: <span className="font-syne font-bold text-[#E8320A]">₹{(p.price * qty).toLocaleString("en-IN")}</span>
      </p>
    </div>
  );
}

function ProductRow({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative sm:w-56 lg:w-64 flex-shrink-0 h-48 sm:h-auto overflow-hidden bg-gray-50">
          {!imgError ? (
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="(max-width: 640px) 100vw, 256px"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
              <span className="text-8xl drop-shadow-lg">{p.emoji}</span>
            </div>
          )}
          <span className={`absolute top-3 left-3 text-xs font-dm font-semibold px-3 py-1 rounded-full shadow ${p.tagColor}`}>
            {p.tag}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-5 sm:p-6 flex-1 gap-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <Link href={`/products/${p.slug}`}>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-[#1A0A00] hover:text-[#E8320A] transition-colors leading-tight">
                  {p.name}
                </h3>
              </Link>
              <span className="font-dm text-xs font-semibold bg-green-50 text-green-700 px-2.5 py-1 rounded-lg flex-shrink-0">
                {p.margin} margin
              </span>
            </div>
            <p className="font-dm text-xs text-[#1A0A00]/50">{p.weight} · {p.moq}</p>
            <p className="font-dm text-sm text-[#1A0A00]/65 leading-relaxed line-clamp-2">{p.desc}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-syne font-extrabold text-2xl text-[#E8320A]">₹{p.price}</span>
              <span className="font-dm text-sm text-gray-400 line-through">₹{p.mrp}</span>
              <span className="font-dm text-sm text-gray-400">/{p.unit}</span>
            </div>

            {/* Quantity + link */}
            <div className="sm:ml-auto flex flex-col gap-2 sm:min-w-[220px]">
              <QuantityControl p={p} />
              <Link
                href={`/products/${p.slug}`}
                className="text-center font-dm text-xs text-[#1A0A00]/50 hover:text-[#E8320A] transition-colors"
              >
                View full details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductList() {
  return (
    <section id="products" className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-dm text-xs sm:text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Our Products
          </p>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A0A00]">
            Our <span className="text-[#E8320A]">Products</span>
          </h2>
          <p className="mt-3 font-dm text-base sm:text-lg text-[#1A0A00]/60 max-w-xl mx-auto">
            Add packs to your order and submit — all via WhatsApp, no app needed.
          </p>
        </motion.div>

        <div className="space-y-4">
          {PRODUCTS.map((p, i) => (
            <ProductRow key={p.id} p={p} index={i} />
          ))}
        </div>

        {/* MOQ Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-[#E8320A] rounded-2xl px-5 py-5 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="text-3xl flex-shrink-0">🛒</div>
          <div className="text-white text-center sm:text-left">
            <p className="font-syne font-bold text-base sm:text-lg">2-Day Delivery · Bangalore Only</p>
            <p className="font-dm text-sm text-white/80 mt-0.5">
              MOQ ₹3,000 · Add packs above and tap the cart to order
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
