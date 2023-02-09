import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    about: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    // phone: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);
