import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

function getPriority(enquiryType: string): "hot" | "warm" | "cold" {
  if (enquiryType === "Franchise") return "hot";
  if (["B2B Supply", "Distributorship", "Export", "Private Label"].includes(enquiryType)) return "warm";
  return "cold";
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, phone, email, city, businessType, enquiryType, message, businessName, state } = body;

    if (!name || !phone || !city || !businessType || !enquiryType) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    const existing = await Lead.findOne({ phone: phone.trim() });

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (existing) {
      existing.followUpNotes.push({
        note: `Returned via website form. Enquiry: ${enquiryType}. Message: ${message ?? "N/A"}`,
        date: new Date(),
      });
      existing.status = "new";
      existing.lastContactDate = new Date();
      existing.nextFollowUpDate = tomorrow;
      await existing.save();

      return NextResponse.json({
        success: true,
        isReturning: true,
        leadId: existing._id,
        message: "Welcome back! Our team will reach you shortly.",
      });
    }

    const lead = await Lead.create({
      name,
      phone,
      email,
      city,
      state,
      businessName,
      businessType,
      enquiryType,
      source: "website_form",
      priority: getPriority(enquiryType),
      nextFollowUpDate: tomorrow,
      followUpNotes: message ? [{ note: message, date: new Date() }] : [],
    });

    return NextResponse.json({
      success: true,
      isReturning: false,
      leadId: lead._id,
      message: "Enquiry received! We'll contact you within 24 hours.",
    });
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const type = searchParams.get("type");
    const limit = parseInt(searchParams.get("limit") ?? "50");

    const filter: Record<string, string> = {};
    if (status) filter.status = status;
    if (type) filter.enquiryType = type;

    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .limit(Math.min(limit, 200));

    return NextResponse.json({ success: true, leads });
  } catch (err) {
    console.error("GET /api/leads error:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
