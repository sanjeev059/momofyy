"use client";
import { motion } from "framer-motion";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "916305468471";
const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "916305468471";
const WA_MSG = encodeURIComponent("Hi Momofy! I'm ready to get started. Please share more details.");

export default function CTABand() {
  return (
    <section className="py-14 sm:py-20 bg-[#E8320A] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute bottom-0 -left-20 w-56 h-56 rounded-full bg-black/10" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            Ready to launch your Momofy business today?
          </h2>
          <p className="font-dm text-white/80 text-base sm:text-lg">
            Join 2,400+ restaurants and franchisees already earning with Momofy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#E8320A] font-syne font-bold text-base px-8 py-4 rounded-full hover:bg-orange-50 transition-colors active:scale-95"
            >
              WhatsApp Us Now
            </a>
            <a
              href={`tel:+${PHONE}`}
              className="border-2 border-white text-white font-syne font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Call +91 63054 68471
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
