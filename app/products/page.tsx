"use client";
import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, BULK_PRICING } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";

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

function ProductDetailCard({ p }: { p: typeof PRODUCTS[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative w-full h-56 overflow-hidden bg-gray-50">
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

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-syne font-bold text-xl text-[#1A0A00]">{p.name}</h3>
          <p className="font-dm text-xs text-[#1A0A00]/40 mt-0.5">{p.weight}</p>
        </div>

        <p className="font-dm text-sm text-[#1A0A00]/60 leading-relaxed flex-1">{p.desc}</p>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="bg-[#FFF8F0] rounded-xl p-3">
            <p className="font-dm text-xs text-[#1A0A00]/40 uppercase tracking-wide">Wholesale</p>
            <p className="font-syne font-bold text-[#E8320A] mt-0.5">₹{p.price}/pack</p>
          </div>
          <div className="bg-[#FFF8F0] rounded-xl p-3">
            <p className="font-dm text-xs text-[#1A0A00]/40 uppercase tracking-wide">MRP</p>
            <p className="font-syne font-bold text-gray-400 line-through mt-0.5">₹{p.mrp}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3">
            <p className="font-dm text-xs text-green-600/60 uppercase tracking-wide">Margin</p>
            <p className="font-syne font-bold text-green-600 mt-0.5">{p.margin}</p>
          </div>
          <div className="bg-[#FFF8F0] rounded-xl p-3">
            <p className="font-dm text-xs text-[#1A0A00]/40 uppercase tracking-wide">MOQ</p>
            <p className="font-syne font-bold text-[#1A0A00] text-sm mt-0.5">{p.moq}</p>
          </div>
        </div>

        <QtyControl product={p} />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase">
            Our Products
          </p>
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-[#1A0A00]">
            Premium <span className="text-[#E8320A]">Frozen Momos</span>
          </h1>
          <p className="font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            Add packs to your order — submit and we confirm on WhatsApp. MOQ ₹3,000.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <ProductDetailCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00] text-center mb-10">
            Bulk Pricing Tiers
          </h2>
          <div className="bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-[#1A0A00] text-white">
                <tr>
                  {["Order Quantity", "Veg Momo", "Chicken Momo", "Paneer Momo"].map((h) => (
                    <th key={h} className="px-5 py-4 font-syne font-bold text-sm text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BULK_PRICING.map((row, i) => (
                  <tr key={row.qty} className={`border-t border-orange-50 ${i === BULK_PRICING.length - 1 ? "bg-[#E8320A]/5" : ""}`}>
                    <td className="px-5 py-4 font-dm text-sm font-medium text-[#1A0A00]">{row.qty}</td>
                    <td className="px-5 py-4 font-syne font-bold text-[#E8320A]">{row.veg}</td>
                    <td className="px-5 py-4 font-syne font-bold text-[#E8320A]">{row.chicken}</td>
                    <td className="px-5 py-4 font-syne font-bold text-[#E8320A]">{row.paneer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-dm text-xs text-[#1A0A00]/40 text-center mt-4">
            Minimum order value ₹3,000. Prices per pack (25 pieces). Delivery charges extra.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00]">Request Wholesale Pricing</h2>
            <p className="font-dm text-[#1A0A00]/60 mt-2">Custom quotes for large volume orders.</p>
          </div>
          <LeadForm
            defaultEnquiryType="B2B Supply"
            heading="Wholesale Enquiry"
            subheading="Tell us your volume and we'll share custom pricing within 24 hours."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
