import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IOrderItem {
  productId: string;
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
}

export interface IOrder extends Document {
  leadId: Types.ObjectId;
  customerName: string;
  customerPhone: string;
  orderNumber: string;
  items: IOrderItem[];
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  total: number;
  deliveryAddress: string;
  expectedDeliveryDate?: Date;
  actualDeliveryDate?: Date;
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "pending" | "partial" | "paid" | "refunded";
  paymentMethod?: string;
  followUpScheduled: boolean;
  followUpDate?: Date;
  followUpDone: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    productId: { type: String, required: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { _id: false }
);

const OrderSchema = new Schema<IOrder>(
  {
    leadId: { type: Schema.Types.ObjectId, ref: "Lead", required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    orderNumber: { type: String, unique: true },
    items: { type: [OrderItemSchema], required: true },
    subtotal: { type: Number, required: true },
    deliveryCharge: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    deliveryAddress: { type: String, required: true },
    expectedDeliveryDate: { type: Date },
    actualDeliveryDate: { type: Date },
    status: {
      type: String,
      enum: ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "partial", "paid", "refunded"],
      default: "pending",
    },
    paymentMethod: { type: String },
    followUpScheduled: { type: Boolean, default: false },
    followUpDate: { type: Date },
    followUpDone: { type: Boolean, default: false },
    notes: { type: String },
  },
  { timestamps: true }
);

OrderSchema.pre("save", async function (next) {
  if (!this.orderNumber) {
    const count = await (this.constructor as Model<IOrder>).countDocuments();
    this.orderNumber = `MFY-${String(count + 1).padStart(5, "0")}`;
  }
  next();
});

const Order: Model<IOrder> =
  mongoose.models.Order ?? mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
