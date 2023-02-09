import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileId: {
      type: String,
    },
    address: {
      type: String,
    },
    telegramUserName: {
      type: String,
    },
    chatId: {
      type: Number,
    }
  },
  { timestamps: true }
);

let Users = mongoose.models.metamaskUser || mongoose.model("metamaskUser", userSchema);

export default Users;