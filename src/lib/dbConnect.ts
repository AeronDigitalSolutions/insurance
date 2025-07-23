import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables.");
}

const dbConnect = async () => {
  console.log("connecting to db");
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGODB_URI);
};

export default dbConnect;