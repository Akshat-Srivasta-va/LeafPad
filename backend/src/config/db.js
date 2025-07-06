import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCESSFULLY");
  } catch (errror) {
    console.error("error in connecting MONGODB", errror);
    process.exit(1); // 1 means exit with failure
    // process.exit(0) → Program ended successfully
  }
};
