import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import Lead from "@/models/Lead";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      leadId,
      customerName,
      customerPhone,
      items,
      subtotal,
      deliveryCharge = 0,
      discount = 0,
      total,
      deliveryAddress,
      expectedDeliveryDate,
      paymentMethod,
      notes,
    } = body;

    if (!leadId || !customerName || !customerPhone || !items || !total || !deliveryAddress) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    const deliveryDate = expectedDeliveryDate ? new Date(expectedDeliveryDate) : new Date();
    const followUpDate = new Date(deliveryDate);
    followUpDate.setDate(followUpDate.getDate() + 25);

    const order = await Order.create({
      leadId,
      customerName,
      customerPhone,
      items,
      subtotal,
      deliveryCharge,
      discount,
      total,
      deliveryAddress,
      expectedDeliveryDate: deliveryDate,
      paymentMethod,
      notes,
      followUpScheduled: true,
      followUpDate,
    });

    const lead = await Lead.findById(leadId);
    if (lead) {
      lead.totalOrders += 1;
      lead.totalRevenue += total;
      if (!lead.firstOrderDate) {
        lead.firstOrderDate = new Date();
        lead.firstOrderValue = total;
      }
      lead.status = "converted";
      await lead.save();
    }

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error("POST /api/orders error:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
