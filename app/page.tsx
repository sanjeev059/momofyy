import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyMomofy from "@/components/WhyMomofy";
import Products from "@/components/Products";
import Franchise from "@/components/Franchise";
import B2B from "@/components/B2B";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Momofy — India's Fastest Growing Momo Franchise",
  description:
    "Start a Momofy momo franchise from ₹89,000 or order frozen momos wholesale. FSSAI certified. Pan India delivery.",
  openGraph: {
    title: "Momofy — India's Fastest Growing Momo Franchise",
    description:
      "Start a Momofy momo franchise from ₹89,000 or order frozen momos wholesale. FSSAI certified. Pan India delivery.",
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
      <Products />
      <Franchise />
      <B2B />
      <Testimonials />

      {/* Lead Capture Section */}
      <section id="contact" className="py-24 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
              Get Started
            </p>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
              Start Your Momofy Journey
            </h2>
            <p className="mt-4 font-dm text-lg text-[#1A0A00]/60">
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
