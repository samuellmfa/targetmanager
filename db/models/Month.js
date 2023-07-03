import { ObjectId } from "mongodb";
import mongoose from "mongoose";
// import "./Review";
const { Schema } = mongoose;

const monthSchema = new Schema({
    Month_target: { type: String, required: true },
    Weight: { type: Number, required: false },
    Organization: { type: String, required: true },
    username: { type: String, required: true },
    IsActive: { type: Boolean, required: false },
    Evaluation:  { type: Number, required: true },
    EvaluationResult: { type: Number, required: true },
    Year_target_id:{ type: String, required: true },
    Weekone_plan: { type: Boolean, default: false },
    Weektwo_plan: { type: Boolean, default: false },
    Weekthree_plan: { type: Boolean, default: false },
    Weekfour_plan: { type: Boolean, default: false },
    Weekone_report: { type: Number, default: 0 },
    Weektwo_report: { type: Number, default: 0 },
    Weekthree_report: { type: Number, default: 0 },
    Weekfour_report: { type: Number, default: 0 },
  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Month =
  mongoose.models.Month || mongoose.model("Month", monthSchema);

export default Month;

