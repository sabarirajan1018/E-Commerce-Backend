import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: "Admin", timestamps: true });

const AdminModel = mongoose.model("Admin", AdminSchema);
export default AdminModel;