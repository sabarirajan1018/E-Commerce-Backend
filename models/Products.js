import mongoose from "mongoose";
import ProdctCategory from "../Configs/categories.json" with { type: 'json' };

const Products = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/171/100/small/demo-symbol-concept-words-demo-on-wooden-blocks-photo.jpg"
    },
    price: {
        type: Number,
        required: true
    },
    availQty: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    subCategory: {
        type: String,
        enum: ProdctCategory.ProductSubCategories,
        default: "New-Collection"
    }
}, { collection: "Products", timestamps: true });

const ProductsModel = mongoose.model("Products", Products);
export default ProductsModel;