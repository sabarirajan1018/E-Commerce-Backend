import express from "express";
import userAuthRouter from "../Users/user.auth.js";

import adminAuthRouter from "../Admin/admin.auth.js";
import adminProductRouter from "../Admin/admin.product.js";
const router = express.Router();

router.use("/user/auth", userAuthRouter);

router.use("/admin/auth", adminAuthRouter);
router.use("/admin/product", adminProductRouter);




export default router;