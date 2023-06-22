import mongoose from "mongoose";

const { Schema } = mongoose;
const EmployeeSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
const UserSchema = new Schema({
  name: { type: String, required: true },
  
  email: { type: String, required: true },
  password:{ type: String, required: true },
});

const PlacUser = mongoose.models.Place || mongoose.model("User", placeSchema);

export default Place;

