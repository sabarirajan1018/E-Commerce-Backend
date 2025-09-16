import express from "express";
import UserAuth from "../../controllers/Users/user.auth.js";
const router = express.Router();

router.post("/register", UserAuth.register);

export default router;

