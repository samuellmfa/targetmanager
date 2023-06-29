import mongoose from "mongoose";
// import "./Review";
const { Schema } = mongoose;

const departmentSchema = new Schema({
  Level_name: { type: String, required: true },
  Level_Department: { type: String, required: false },
  Parent_department: { type: String, required: true },
  Organization: { type: String, required: true },
  // reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Department =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

export default Department;

