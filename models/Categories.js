import mongoose from "mongoose";
import ProdctCategory from "../Configs/categories.json" with { type: 'json' };


const Categories = new mongoose.Schema({
    name: {
        type: String,
        enum: ProdctCategory.ProductsMainCategories,
        default: 'New-Collections'
    },
}, { collection: "Categories", timestamps: true });

const CategoriesModel = mongoose.model("Categories", Categories);
export default CategoriesModel;