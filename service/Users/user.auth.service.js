import { checkCreationValues } from "../../helpers/validation.helper.js";
import UserModel from "../../models/User.js";

class UserAuthService {
    getUser = async (fields) => {
        try {
            const result = await UserModel.findOne(fields);
            if (result) return { status: true, msg: "User Registered Successfully!", data: result }
            else return { status: false, msg: "User Not Found" }
        } catch (error) {
            console.error({ getUser: error })
            return { status: false, msg: "Internal Server Error" };

        }
    }
    createAUser = async (req_Body) => {
        try {
            const isValid = await checkCreationValues(req_Body, "user");
            if (isValid.status) {
                const existUser = await this.getUser({ email: req_Body.email });
                if (!existUser.status) {
                    const data = await UserModel.create(req_Body);
                    return { status: true, msg: "User Registered Successfully!", data }
                } else {
                    return { status: false, msg: existUser.msg }
                }
            } else {
                return { status: false, msg: isValid.message }
            }

        } catch (error) {
            console.error({ createAUser: error })
            return { status: false, msg: "Internal Server Error" }
        }
    }
};

export default new UserAuthService;