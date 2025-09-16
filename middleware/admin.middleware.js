import dotenv from "dotenv";
dotenv.config();
import JWT from "jsonwebtoken";
const { JWT_KEY } = process.env;

export const adminTokenCheck = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.send({ status: false, message: "Unauthorized" })
        };

        const payload = JWT.verify(token, JWT_KEY);
        const currentDate = Date.now();
        const tokenExpiry = payload.exp * 1000;
        if (tokenExpiry < currentDate) {
            return res.status(401).send({ status: false, message: "Session has expired" });
        };
        req.adminId = payload.adminId;
        next();
    } catch (error) {
        console.error({ adminTokenCheck: error });
        return res.send({ status: false, message: "Admin Authendication Error" })
    };
};