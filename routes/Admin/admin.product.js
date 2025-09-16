import express from "express";
import adminProduct from "../../controllers/Admin/admin.product.js";
import { adminTokenCheck } from "../../middleware/admin.middleware.js"
const router = express.Router();

router.post("/add-category", adminTokenCheck, adminProduct.addCategory);
router.post("/add-product", adminTokenCheck, adminProduct.addProduct);

export default router;