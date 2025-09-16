import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    TFACode: {
        type: String,
        default: ""
    }
}, {
    collection: "Users",
    timestamps: true
});
const UserModel = mongoose.model("Users", UserSchema)
export default UserModel;