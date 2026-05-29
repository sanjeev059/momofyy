import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyMomofy from "@/components/WhyMomofy";
import ProductList from "@/components/ProductList";
import FreshVsFrozen from "@/components/FreshVsFrozen";
import Franchise from "@/components/Franchise";
import B2B from "@/components/B2B";
import Testimonials from "@/components/Testimonials";
import PartyOrders from "@/components/PartyOrders";
import FAQ from "@/components/FAQ";
import HygieneSection from "@/components/HygieneSection";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Momofy — India's Fastest Growing Momo Franchise",
  description:
    "Start a Momofy momo franchise from ₹89,000 or order frozen momos wholesale. No preservatives. Pan India delivery.",
  openGraph: {
    title: "Momofy — India's Fastest Growing Momo Franchise",
    description:
      "Start a Momofy momo franchise from ₹89,000 or order frozen momos wholesale. No preservatives. Pan India delivery.",
    url: "https://momofyy.com",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyMomofy />
      <ProductList />
      <FreshVsFrozen />
      <Franchise />
      <B2B />
      <Testimonials />
      <PartyOrders />
      <FAQ />
      <HygieneSection />

      {/* Lead Capture */}
      <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <p className="font-dm text-xs sm:text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
              Get Started
            </p>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A0A00]">
              Start Your Momofy Journey
            </h2>
            <p className="mt-3 font-dm text-base sm:text-lg text-[#1A0A00]/60">
              Franchise, B2B supply, distributorship — tell us what you need.
            </p>
          </div>
          <LeadForm
            heading="Enquire Now"
            subheading="Our team calls back within 24 hours. WhatsApp for faster response."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
