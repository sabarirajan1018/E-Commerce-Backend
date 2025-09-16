import mongoose from "mongoose";

const UserAddressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    street: {
        type: String,
        default: ""
    },
    area: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    deliveryNumber: {
        type: String,
        required: true,
    },
    addressType: {
        type: String,
        default: "Home"
    }
}, {
    collection: "UserAddress",
    timestamps: true
});
const UserAddressModel = mongoose.model("UserAddress", UserAddressSchema)
export default UserAddressModel;