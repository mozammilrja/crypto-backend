import mongoose from "mongoose";

const schema = mongoose.Schema({
  profilePic: [String],
  firstname: {
    // required: false,
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    required: false,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    required: false,
    type: String,
    validate: {
      validator: (value) => {
        return value.length > 6;
      },
      message: "Weak password",
    },
  },
  type: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  country: {
    type: String,
    // required: true,
  },
  about: {
    type: String,
    // required: true,
  },
  website: {
    type: String,
    // required: true,
  },
  company_name: {
    type: String,
    // required: true,
  },
});

export default mongoose.model("User", schema);
