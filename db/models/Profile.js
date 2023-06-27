import mongoose from "mongoose";
const { Schema } = mongoose;

const profileSchema = new Schema({
  name: { type: String, required: true },
  Title: { type: String, required: true },
  Department: { type: String, required: true },
  IsHead: {
    type: Boolean,
    default: false
   },
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Created : { type: String , required: true },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;

