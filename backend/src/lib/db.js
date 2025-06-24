import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hemanth143:heman4444@cluster0.adau0p4.mongodb.net/fullstack-chat-app?retryWrites=true&w=majority"
    );
    console.log("✔ MongoDB connected successfully");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};
