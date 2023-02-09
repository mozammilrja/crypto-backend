import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  console.log(`Database connect: ${conn.connection.host}`);
};

export default connectDB;

// mongodb+srv://immunebytes:admin@immunebytes.tsiim3c.mongodb.net/immunebytes?retryWrites=true&w=majority
