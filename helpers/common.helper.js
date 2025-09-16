import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import JWT from "jsonwebtoken";


const { JWT_KEY } = process.env;
export const createToken = async (payload) => {
    console.log({ JWT_KEY }, { payload })
    return JWT.sign(payload, JWT_KEY, { expiresIn: "24h" })
};

export const checkMongooseId = (reqId) => {
    if (mongoose.Types.ObjectId.isValid(reqId)) return true;
    else return false;
};