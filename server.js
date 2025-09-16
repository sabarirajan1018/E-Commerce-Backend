import dotenv from "dotenv";
dotenv.config();
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { connectMongoDB } from "./Configs/db.js";
import userApi from "./routes/base/index.route.js";
import adminApi from "./routes/base/index.route.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: process.env.FRONTEND_URL, methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use("/api", userApi);
app.use("/api", adminApi);


app.get("/", (req, res) => {
    res.send("E-Commerce API is running");
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    await connectMongoDB();
    console.log(`E-Commerce Server Connected On ${PORT}`);
});