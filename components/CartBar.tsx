"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "916305468471";
const MOQ = 3000;

function buildWAMessage(items: ReturnType<typeof useCart>["items"], total: number): string {
  const lines = items.map(
    (item) =>
      `${item.emoji} ${item.name} (${item.weight}) × ${item.qty} pack${item.qty > 1 ? "s" : ""} = ₹${item.price * item.qty}`
  );

  const belowMOQ = total < MOQ;
  const moqNote = belowMOQ
    ? `\n⚠️ Note: Minimum order is ₹${MOQ.toLocaleString("en-IN")}. Please add more items.`
    : "";

  return encodeURIComponent(
    `Hi Momofy! 🥟 I'd like to place an order:\n\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      lines.join("\n") +
      `\n━━━━━━━━━━━━━━━━━━━\n` +
      `💰 Order Total: ₹${total.toLocaleString("en-IN")}` +
      moqNote +
      `\n\nPlease confirm availability and share delivery details. Thank you!`
  );
}

export default function CartBar() {
  const { items, totalQty, totalAmount, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  if (totalQty === 0) return null;

  const belowMOQ = totalAmount < MOQ;
  const waMsg = buildWAMessage(items, totalAmount);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Order Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[80vh] flex flex-col"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="font-syne font-bold text-xl text-[#1A0A00]">Your Order</h3>
                <p className="font-dm text-sm text-[#1A0A00]/50">{totalQty} pack{totalQty > 1 ? "s" : ""} selected</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 py-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="font-dm font-medium text-[#1A0A00] text-sm">{item.name}</p>
                      <p className="font-dm text-xs text-[#1A0A00]/40">{item.weight} · ₹{item.price}/pack</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-dm text-xs text-[#1A0A00]/40">× {item.qty}</p>
                    <p className="font-syne font-bold text-[#E8320A]">₹{item.price * item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-gray-100 space-y-3">
              {/* MOQ warning */}
              {belowMOQ && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">⚠️</span>
                  <p className="font-dm text-xs text-amber-700">
                    Minimum order is ₹3,000. Add ₹{(MOQ - totalAmount).toLocaleString("en-IN")} more to qualify.
                  </p>
                </div>
              )}

              {/* Total row */}
              <div className="flex items-center justify-between">
                <span className="font-dm font-medium text-[#1A0A00]">Order Total</span>
                <span className="font-syne font-extrabold text-2xl text-[#E8320A]">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Submit button */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setOpen(false); clearCart(); }}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-syne font-bold text-base py-4 rounded-2xl hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-lg shadow-green-200"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Submit Order on WhatsApp
              </a>

              <button
                onClick={clearCart}
                className="w-full text-center font-dm text-sm text-gray-400 hover:text-[#E8320A] transition-colors py-1"
              >
                Clear cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating sticky bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-24 sm:w-80 z-40"
      >
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-between bg-[#1A0A00] text-white rounded-2xl px-5 py-4 shadow-2xl hover:bg-[#2a1400] transition-colors active:scale-95"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E8320A] rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                {totalQty > 9 ? "9+" : totalQty}
              </span>
            </div>
            <div className="text-left">
              <p className="font-syne font-bold text-sm">{totalQty} pack{totalQty > 1 ? "s" : ""}</p>
              <p className="font-dm text-xs text-white/50">Tap to review & order</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-syne font-extrabold text-lg text-[#FFB347]">
              ₹{totalAmount.toLocaleString("en-IN")}
            </p>
            {belowMOQ && (
              <p className="font-dm text-[10px] text-amber-400">MOQ: ₹3,000</p>
            )}
          </div>
        </button>
      </motion.div>
    </>
  );
}
