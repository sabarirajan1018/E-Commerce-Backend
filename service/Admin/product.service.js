import ProductsModel from "../../models/Products.js";
import CategoriesModel from "../../models/Categories.js";
import { checkCreationValues } from "../../helpers/validation.helper.js";
import { checkMongooseId } from "../../helpers/common.helper.js";

class ProductService {

    getOneCategory = async (where) => {
        try {
            const result = await CategoriesModel.findOne(where);
            if (result) return { status: true, msg: "Category Successfully Retrived!", data: result || {} }
            else return { status: false, msg: "Category Not Found", data: [] }
        } catch (error) {
            console.error({ getProduct: error });
            return { status: false, msg: "Internal Server Error" };
        };
    };

    addCategory = async (req_Body) => {
        try {

            if (typeof req_Body !== "object" || !req_Body.name) {
                return { status: false, msg: "Category name must be required" }
            }
            const existCategory = await this.getOneCategory({ name: req_Body.name });
            if (!existCategory.status) {
                const result = await CategoriesModel.create(req_Body);
                return { status: true, msg: "Category Successfully Created!", data: result || {} }
            } else return { status: false, msg: "This Category Already Added!", data: null }
        } catch (error) {
            console.error({ addCategory: error.message });
            return { status: false, msg: error.message || "Internal Server Error" };
        };
    };

    getProducts = async (where) => {
        try {
            const result = await ProductsModel.find(where);
            if (result.length > 0) return { status: true, msg: "Product Successfully Retrived!", data: result || [] }
            else return { status: false, msg: "Products Not Found", data: [] }
        } catch (error) {
            console.error({ getProduct: error });
            return { status: true, msg: "Internal Server Error" };
        };
    };

    getOneProduct = async (where) => {
        try {
            const result = await ProductsModel.findOne(where);
            if (result) return { status: true, msg: "Product Successfully Retrived!", data: result || {} }
            else return { status: false, msg: "Products Not Found", data: [] }
        } catch (error) {
            console.error({ getProduct: error });
            return { status: false, msg: "Internal Server Error" };
        };
    };

    addProduct = async (req_Body) => {
        try {
            const isValid = await checkCreationValues(req_Body, "product");
            if (isValid.status) {
                const isValidCategory = await checkMongooseId(req_Body.category);
                if (isValidCategory) {
                    const result = await ProductsModel.create(req_Body);
                    return { status: true, msg: "Product have been created!", data: result || {} }
                } else {
                    return { status: false, msg: "Invalid Category" }
                }
            } else {
                return { status: false, msg: isValid.message }
            };
        } catch (error) {
            console.error({ addProduct: error });
            return { status: false, msg: "Internal Server Error" };
        };
    };
};

export default new ProductService;