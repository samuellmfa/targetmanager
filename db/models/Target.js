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
      Jan: Boolean,
      Feb: Boolean,
      Mar: Boolean,
      Apr: Boolean,
      May: Boolean,
      Jun: Boolean,
      Jul: Boolean,
      Aug: Boolean,
      Sep: Boolean,
      Oct: Boolean,
      Dec: Boolean
       }]
  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Target =
  mongoose.models.Target || mongoose.model("Target", targetSchema);

export default Target;

