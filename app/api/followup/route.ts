import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import Order from "@/models/Order";

export async function GET() {
  try {
    await connectDB();
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    const dueLeads = await Lead.find({
      nextFollowUpDate: { $lte: today },
      status: { $nin: ["converted", "lost", "inactive"] },
    }).sort({ nextFollowUpDate: 1 });

    const dueOrders = await Order.find({
      followUpDate: { $lte: today },
      followUpDone: false,
      status: "delivered",
    }).sort({ followUpDate: 1 });

    return NextResponse.json({
      success: true,
      summary: {
        dueLeads: dueLeads.length,
        dueOrders: dueOrders.length,
        total: dueLeads.length + dueOrders.length,
      },
      dueLeads,
      dueOrders,
    });
  } catch (err) {
    console.error("GET /api/followup error:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { leadId, orderId, note, nextFollowUpDays = 7, action } = body;

    if (leadId) {
      const lead = await Lead.findById(leadId);
      if (!lead) return NextResponse.json({ success: false, message: "Lead not found." }, { status: 404 });

      lead.followUpNotes.push({ note: note ?? "Follow-up done", date: new Date() });
      lead.lastContactDate = new Date();

      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + nextFollowUpDays);
      lead.nextFollowUpDate = nextDate;

      if (action) lead.status = action;
      await lead.save();
      return NextResponse.json({ success: true, lead });
    }

    if (orderId) {
      const order = await Order.findById(orderId);
      if (!order) return NextResponse.json({ success: false, message: "Order not found." }, { status: 404 });

      order.followUpDone = true;
      if (note) order.notes = (order.notes ?? "") + `\n[Follow-up ${new Date().toISOString()}]: ${note}`;
      await order.save();
      return NextResponse.json({ success: true, order });
    }

    return NextResponse.json({ success: false, message: "Provide leadId or orderId." }, { status: 400 });
  } catch (err) {
    console.error("POST /api/followup error:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
