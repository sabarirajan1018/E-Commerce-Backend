import ProductModel from "../../models/Products.js";
import CategoriesModel from "../../models/Categories.js";
import { successResponse, errorResponse } from "../../helpers/response.helper.js";
import productService from "../../service/Admin/product.service.js";

class Product {
    addProduct = async (req, res) => {
        try {
            const result = await productService.addProduct(req.body)
            successResponse(res, result)
        } catch (error) {
            console.error({ addProduct: error });
            errorResponse(res, error)
        };
    };
    addCategory = async (req, res) => {
        try {
            const result = await productService.addCategory(req.body)
            successResponse(res, result)
        } catch (error) {
            console.error({ addCategory: error });
            errorResponse(res, error)
        }
    }
};

export default new Product;