import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFollowUpNote {
  note: string;
  date: Date;
  by?: string;
}

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  city: string;
  state?: string;
  businessName?: string;
  businessType: "Restaurant" | "Café" | "Cloud Kitchen" | "Food Truck" | "Distributor" | "Retailer" | "Exporter" | "Franchise";
  enquiryType: "Franchise" | "B2B Supply" | "Distributorship" | "Export" | "Private Label";
  firstOrderDate?: Date;
  firstOrderValue?: number;
  firstOrderItems?: string[];
  totalOrders: number;
  totalRevenue: number;
  lastContactDate?: Date;
  nextFollowUpDate?: Date;
  followUpNotes: IFollowUpNote[];
  status: "new" | "contacted" | "negotiating" | "converted" | "inactive" | "lost";
  priority: "hot" | "warm" | "cold";
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt: Date;
  updatedAt: Date;
}

const FollowUpNoteSchema = new Schema<IFollowUpNote>(
  {
    note: { type: String, required: true },
    date: { type: Date, default: Date.now },
    by: { type: String },
  },
  { _id: false }
);

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true, index: true },
    email: { type: String, trim: true, lowercase: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, trim: true },
    businessName: { type: String, trim: true },
    businessType: {
      type: String,
      required: true,
      enum: ["Restaurant", "Café", "Cloud Kitchen", "Food Truck", "Distributor", "Retailer", "Exporter", "Franchise"],
    },
    enquiryType: {
      type: String,
      required: true,
      enum: ["Franchise", "B2B Supply", "Distributorship", "Export", "Private Label"],
    },
    firstOrderDate: { type: Date },
    firstOrderValue: { type: Number },
    firstOrderItems: [{ type: String }],
    totalOrders: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    lastContactDate: { type: Date },
    nextFollowUpDate: { type: Date },
    followUpNotes: { type: [FollowUpNoteSchema], default: [] },
    status: {
      type: String,
      enum: ["new", "contacted", "negotiating", "converted", "inactive", "lost"],
      default: "new",
    },
    priority: {
      type: String,
      enum: ["hot", "warm", "cold"],
      default: "cold",
    },
    source: { type: String, default: "website_form" },
    utmSource: { type: String },
    utmMedium: { type: String },
    utmCampaign: { type: String },
  },
  { timestamps: true }
);

const Lead: Model<ILead> =
  mongoose.models.Lead ?? mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
