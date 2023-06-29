import mongoose from "mongoose";
// import "./Review";
const { Schema } = mongoose;

const targetSchema = new Schema({
    Year_target: { type: String, required: true },
    Weight: { type: Number, required: false },
    Jan: { type: Boolean, required: false,default:false },
    Feb: { type: Boolean, required: false,default:false },
    Mar: { type: Boolean, required: false,default:false },
    Apr: { type: Boolean, required: false,default:false },
    May: { type: Boolean, required: false,default:false },
    Jun: { type: Boolean, required: false,default:false },
    Jul: { type: Boolean, required: false,default:false },
    Aug: { type: Boolean, required: false,default:false },
    Sep: { type: Boolean, required: false,default:false },
    Oct: { type: Boolean, required: false,default:false },
    Dec: { type: Boolean, required: false,default:false },
    Organization: { type: String, required: true },
    username: { type: String, required: true },
    IsActive: { type: Boolean, required: false },
    Parent_plan: { type: String, required: true },
    Evaluation: { type: Number, required: true },
    EvaluationResult: { type: Number, required: true },

  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Target =
  mongoose.models.Target || mongoose.model("Target", targetSchema);

export default Target;

