import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    // ตรวจสอบว่าค่า MONGODB_URI มีค่าหรือไม่
    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
};
