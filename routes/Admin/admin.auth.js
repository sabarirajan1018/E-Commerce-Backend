import express from "express";
import adminAuth from "../../controllers/Admin/admin.auth.js";
import { adminTokenCheck } from "../../middleware/admin.middleware.js"
const router = express.Router();

router.post("/register", adminAuth.register);
router.post("/login", adminAuth.login);



export default router;