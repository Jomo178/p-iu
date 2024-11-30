import mongoose, { Document, Schema, Types } from "mongoose";

// Define the Issue interface
interface IIssue extends Document {
  name: string;
  group: string;
  rarity: string;
  act: string;
  code: string;
  image: string;
  releaseDate: Date;
  createdById: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  approvedById: Types.ObjectId;
  approvedAt: Date;
  eventId: Types.ObjectId;
  dropAble: Boolean;
}

// Define the Issue schema
const issueSchema = new Schema<IIssue>(
  {
    name: { type: String, required: true },
    group: { type: String, required: true },
    rarity: { type: String, required: true },
    act: { type: String, required: true },
    code: { type: String, unique: true, required: true },
    image: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    createdById: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now, updatedAt: true },
    approvedById: { type: Schema.Types.ObjectId, ref: "Staff" },
    approvedAt: { type: Date },
    eventId: { type: Schema.Types.ObjectId, required: true },
    dropAble: { type: Boolean },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    collection: "issues",
  }
);

// Check if the model is already compiled
const Issue =
  mongoose.models.Issue || mongoose.model<IIssue>("Issue", issueSchema);

export default Issue;
