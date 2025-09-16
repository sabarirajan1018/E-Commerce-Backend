import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/E-Commerce");
        console.log(`E-Commerce Mongodb Connected`);
    } catch (err) {
        console.log("Mongodb Connection Error!", err.message);
        process.exit(1);
    };
};