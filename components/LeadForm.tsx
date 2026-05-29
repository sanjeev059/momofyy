"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const BUSINESS_TYPES = [
  "Restaurant",
  "Café",
  "Cloud Kitchen",
  "Food Truck",
  "Distributor",
  "Retailer",
  "Exporter",
  "Franchise",
];

const ENQUIRY_TYPES = [
  "Franchise",
  "B2B Supply",
  "Distributorship",
  "Export",
  "Private Label",
];

interface LeadFormProps {
  defaultEnquiryType?: string;
  heading?: string;
  subheading?: string;
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "916305468471";

export default function LeadForm({
  defaultEnquiryType,
  heading = "Get in Touch",
  subheading = "Fill in your details and our team will reach you within 24 hours.",
}: LeadFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    businessType: "",
    enquiryType: defaultEnquiryType ?? "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.city || !form.businessType || !form.enquiryType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      setIsReturning(data.isReturning);
      setLeadId(data.leadId);
      setSubmitted(true);
      toast.success(data.isReturning ? "Welcome back! We'll reach you shortly." : "Enquiry received!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const waMsg = encodeURIComponent(
      `Hi Momofy! I just submitted an enquiry (${form.enquiryType}) from ${form.city}. My name is ${form.name}. Please get back to me.`
    );

    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-orange-100 text-center space-y-5">
        <div className="text-6xl">🥟</div>
        <h3 className="font-syne font-bold text-2xl text-[#1A0A00]">
          {isReturning ? "Welcome back! 👋" : "Enquiry Received! 🎉"}
        </h3>
        <p className="font-dm text-[#1A0A00]/60">
          {isReturning
            ? "Great to see you again! Our team has your details and will reach you very soon."
            : "Our team will contact you within 24 hours. Continue on WhatsApp for faster response!"}
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white font-syne font-bold px-8 py-4 rounded-full hover:bg-[#1ebe5d] transition-colors"
        >
          Continue on WhatsApp →
        </a>
        {leadId && (
          <p className="font-dm text-xs text-[#1A0A00]/30">Reference: {leadId}</p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-100">
      <div className="mb-6 sm:mb-8">
        <h3 className="font-syne font-bold text-xl sm:text-2xl text-[#1A0A00]">{heading}</h3>
        <p className="font-dm text-sm sm:text-base text-[#1A0A00]/60 mt-1">{subheading}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
              Full Name <span className="text-[#E8320A]">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              required
              className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors"
            />
          </div>
          <div>
            <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
              Phone <span className="text-[#E8320A]">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              required
              type="tel"
              className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
              Email <span className="text-[#1A0A00]/40 text-xs">(optional)</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              type="email"
              className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors"
            />
          </div>
          <div>
            <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
              City <span className="text-[#E8320A]">*</span>
            </label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="e.g. Bangalore"
              required
              className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
              Business Type <span className="text-[#E8320A]">*</span>
            </label>
            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              required
              className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors appearance-none"
            >
              <option value="">Select type…</option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
              Enquiry Type <span className="text-[#E8320A]">*</span>
            </label>
            <select
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              required
              className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors appearance-none"
            >
              <option value="">Select enquiry…</option>
              {ENQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-dm text-sm font-medium text-[#1A0A00] mb-1.5">
            Message <span className="text-[#1A0A00]/40 text-xs">(optional)</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements…"
            rows={3}
            className="w-full border border-orange-100 rounded-xl px-4 py-3 font-dm text-sm text-[#1A0A00] bg-[#FFF8F0] focus:outline-none focus:border-[#E8320A] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E8320A] text-white font-syne font-bold text-base py-4 rounded-full hover:bg-[#c92a07] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Send Enquiry →"
          )}
        </button>
      </form>
    </div>
  );
}
