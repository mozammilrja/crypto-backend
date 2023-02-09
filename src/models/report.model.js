import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
       trim: true
    },
    programName: {
      type: String,
      // required: true,
    },
    overview: {
      type: String,
      trim: true
    },
    details: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      trim: true,
      default: "Pending",
        },
    reportFiles:[String],
    note: {
      type: String,
      trim: true,
    },
    profileId: {
      type: String,
      required: [true, "please atach profile id"],
    },
  },
  { timestamps: true }
);

// let Reports = mongoose.model("report", reportSchema);
let Reports = mongoose.models.report || mongoose.model("report", reportSchema);
export default Reports;