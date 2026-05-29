"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "916305468471";
const MOQ = 3000;

interface DeliveryDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

function buildWAMessage(
  items: ReturnType<typeof useCart>["items"],
  total: number,
  delivery: DeliveryDetails
): string {
  const lines = items.map(
    (item) =>
      `${item.emoji} ${item.name} (${item.weight}) × ${item.qty} pack${item.qty > 1 ? "s" : ""} = ₹${(item.price * item.qty).toLocaleString("en-IN")}`
  );

  const mapsQuery = encodeURIComponent(`${delivery.address}, ${delivery.city} ${delivery.pincode}`);
  const mapsLink = `https://maps.google.com/?q=${mapsQuery}`;

  const belowMOQ = total < MOQ;
  const moqNote = belowMOQ
    ? `\n⚠️ Note: MOQ is ₹${MOQ.toLocaleString("en-IN")}. Please confirm before dispatch.`
    : "";

  return encodeURIComponent(
    `Hi Momofy! 🥟 I'd like to place an order:\n\n` +
    `━━━━━━━━━━━━━━━━━━━\n` +
    lines.join("\n") +
    `\n━━━━━━━━━━━━━━━━━━━\n` +
    `💰 Order Total: ₹${total.toLocaleString("en-IN")}` +
    moqNote +
    `\n\n📋 *Delivery Details:*\n` +
    `Name: ${delivery.name}\n` +
    `Phone: ${delivery.phone}\n` +
    `Address: ${delivery.address}\n` +
    `City: ${delivery.city}${delivery.pincode ? ` - ${delivery.pincode}` : ""}\n` +
    `📍 Location: ${mapsLink}\n\n` +
    `Please confirm availability and share delivery charges. Thank you!`
  );
}

export default function CartBar() {
  const { items, totalQty, totalAmount, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"review" | "details">("review");
  const [delivery, setDelivery] = useState<DeliveryDetails>({
    name: "", phone: "", address: "", city: "", pincode: "",
  });
  const [errors, setErrors] = useState<Partial<DeliveryDetails>>({});

  if (totalQty === 0) return null;

  const belowMOQ = totalAmount < MOQ;

  const handleClose = () => {
    setOpen(false);
    setStep("review");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDelivery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateAndSubmit = () => {
    const newErrors: Partial<DeliveryDetails> = {};
    if (!delivery.name.trim()) newErrors.name = "Required";
    if (!delivery.phone.trim() || delivery.phone.length < 10) newErrors.phone = "Valid phone required";
    if (!delivery.address.trim()) newErrors.address = "Required";
    if (!delivery.city.trim()) newErrors.city = "Required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const waMsg = buildWAMessage(items, totalAmount, delivery);
    window.open(`https://wa.me/${WA_NUMBER}?text=${waMsg}`, "_blank");
    handleClose();
    clearCart();
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[88vh] flex flex-col"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                {step === "details" && (
                  <button
                    onClick={() => setStep("review")}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 text-sm"
                  >
                    ←
                  </button>
                )}
                <div>
                  <h3 className="font-syne font-bold text-lg text-[#1A0A00]">
                    {step === "review" ? "Your Order" : "Delivery Details"}
                  </h3>
                  <p className="font-dm text-xs text-[#1A0A00]/50">
                    {step === "review"
                      ? `${totalQty} pack${totalQty > 1 ? "s" : ""} · ₹${totalAmount.toLocaleString("en-IN")}`
                      : "We need this to arrange delivery"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 text-sm"
              >
                ✕
              </button>
            </div>

            {/* Step 1 — Review */}
            {step === "review" && (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-3 space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-3 py-2 border-b border-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <p className="font-dm font-medium text-[#1A0A00] text-sm">{item.name}</p>
                          <p className="font-dm text-xs text-[#1A0A00]/40">{item.weight} · ₹{item.price}/pack</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-dm text-xs text-[#1A0A00]/40">× {item.qty} pack{item.qty > 1 ? "s" : ""}</p>
                        <p className="font-syne font-bold text-[#E8320A]">₹{(item.price * item.qty).toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-4 border-t border-gray-100 space-y-3 flex-shrink-0">
                  {belowMOQ && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-start gap-2">
                      <span className="text-amber-500 text-sm mt-0.5">⚠️</span>
                      <p className="font-dm text-xs text-amber-700">
                        Add ₹{(MOQ - totalAmount).toLocaleString("en-IN")} more to meet the ₹3,000 minimum order.
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-dm text-sm font-medium text-[#1A0A00]">Order Total</span>
                    <span className="font-syne font-extrabold text-2xl text-[#E8320A]">
                      ₹{totalAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={() => setStep("details")}
                    className="w-full bg-[#E8320A] text-white font-syne font-bold text-base py-4 rounded-2xl hover:bg-[#c92a07] active:scale-95 transition-all"
                  >
                    Next: Add Delivery Details →
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center font-dm text-xs text-gray-400 hover:text-[#E8320A] transition-colors py-1"
                  >
                    Clear cart
                  </button>
                </div>
              </>
            )}

            {/* Step 2 — Delivery Details */}
            {step === "details" && (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                  {/* Order summary strip */}
                  <div className="bg-[#FFF8F0] rounded-xl px-4 py-2.5 flex items-center justify-between border border-orange-100">
                    <span className="font-dm text-xs text-[#1A0A00]/60">{totalQty} packs · {items.length} item{items.length > 1 ? "s" : ""}</span>
                    <span className="font-syne font-bold text-[#E8320A]">₹{totalAmount.toLocaleString("en-IN")}</span>
                  </div>

                  <Field label="Full Name *" error={errors.name}>
                    <input
                      name="name"
                      value={delivery.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={inputClass(!!errors.name)}
                    />
                  </Field>

                  <Field label="Phone Number *" error={errors.phone}>
                    <input
                      name="phone"
                      value={delivery.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      className={inputClass(!!errors.phone)}
                    />
                  </Field>

                  <Field label="Delivery Address *" error={errors.address}>
                    <textarea
                      name="address"
                      value={delivery.address}
                      onChange={handleChange}
                      placeholder="e.g. 123, MG Road, Indiranagar"
                      rows={2}
                      className={inputClass(!!errors.address) + " resize-none"}
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-3">
                    <Field label="City *" error={errors.city}>
                      <input
                        name="city"
                        value={delivery.city}
                        onChange={handleChange}
                        placeholder="e.g. Bangalore"
                        className={inputClass(!!errors.city)}
                      />
                    </Field>
                    <Field label="PIN Code" error={errors.pincode}>
                      <input
                        name="pincode"
                        value={delivery.pincode}
                        onChange={handleChange}
                        placeholder="560001"
                        type="tel"
                        inputMode="numeric"
                        maxLength={6}
                        className={inputClass(false)}
                      />
                    </Field>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 flex items-start gap-2">
                    <span className="text-blue-500 text-sm flex-shrink-0 mt-0.5">📍</span>
                    <p className="font-dm text-xs text-blue-700 leading-relaxed">
                      A Google Maps link will be included in the order so we can arrange accurate delivery.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0">
                  <button
                    onClick={validateAndSubmit}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-syne font-bold text-base py-4 rounded-2xl hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-lg shadow-green-200"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Submit Order on WhatsApp
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating sticky bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-20 left-3 right-3 sm:left-auto sm:right-24 sm:w-80 z-40"
      >
        <button
          onClick={() => { setOpen(true); setStep("review"); }}
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
              <p className="font-syne font-bold text-sm">{totalQty} pack{totalQty > 1 ? "s" : ""} in cart</p>
              <p className="font-dm text-xs text-white/50">Tap to review & place order</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-syne font-extrabold text-lg text-[#FFB347]">
              ₹{totalAmount.toLocaleString("en-IN")}
            </p>
            {belowMOQ && (
              <p className="font-dm text-[10px] text-amber-400">₹{(MOQ - totalAmount).toLocaleString("en-IN")} to MOQ</p>
            )}
          </div>
        </button>
      </motion.div>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border rounded-xl px-3 py-2.5 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none transition-colors ${
    hasError ? "border-red-400 focus:border-red-500" : "border-orange-100 focus:border-[#E8320A]"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="block font-dm text-xs font-medium text-[#1A0A00]/70">{label}</label>
      {children}
      {error && <p className="font-dm text-xs text-red-500">{error}</p>}
    </div>
  );
}
