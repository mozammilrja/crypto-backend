import mongoose from "mongoose";
const ProgramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: { unique: true },
    },
   
    critical: {
      type: Number,
      required: true,
      // max: [1000000],
      } ,
    high: {
      type: Number,
      required: true,
      // max: [100000],
      } ,
    medium: {
      type: Number,
      required: true,
      // max:[10000]
      } ,
    low: {
      type: Number,
      required: true,
      // max:[1000]
      } ,
    // informational: {
    //   type: Number,
    //   required: true,
    //   max:[1000]
    //   } ,
    recommendation: {
      type: String,
    },
    blockchain:[{
      projectLink: String,
      projectType: String,
    }],
    // contract: {
    //   type: String,
    // },
    
    accepted_bug: {
      type: String,
    },
    program_rules: {
      type: String,
    },
    // date: {
    //   type: Date,
    //   default: Date.now
    // },
    userId: String,
  },
  {timestamps: true, select: false }
);

export default mongoose.model("Programs", ProgramSchema);
