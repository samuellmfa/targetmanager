import mongoose from "mongoose";
// import "./Review";
const { Schema } = mongoose;

const departmentSchema = new Schema({
  name: { type: String, required: true },
  parent: { type: Number, required: true },
  organization: { type: String, required: true },
  Head: { type: String, required: true },
  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Department =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

export default Department;
