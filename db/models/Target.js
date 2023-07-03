import mongoose from "mongoose";
// import "./Review";
const { Schema } = mongoose;

const targetSchema = new Schema({
    Year_target: { type: String, required: true },
    Weight: { type: Number, required: false },
    Organization: { type: String, required: true },
    username: { type: String, required: true },
    IsActive: { type: Boolean, required: false },
    Evaluation:  { type: Number, required: true },
    EvaluationResult: { type: Number, required: true },
    employees : [{
      name : String,
      username : String,
      Jan: { type: Boolean, default: false },
      Feb: { type: Boolean, default: false },
      Mar: { type: Boolean, default: false },
      Apr: { type: Boolean, default: false },
      May: { type: Boolean, default: false },
      Jun: { type: Boolean, default: false },
      Jul: { type: Boolean, default: false },
      Aug: { type: Boolean, default: false },
      Sep: { type: Boolean, default: false },
      Oct: { type: Boolean, default: false },
      Nov: { type: Boolean, default: false },
      Dec: { type: Boolean, default: false },
       }]
  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Target =
  mongoose.models.Target || mongoose.model("Target", targetSchema);

export default Target;

