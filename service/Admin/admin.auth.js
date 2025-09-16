import { checkCreationValues } from "../../helpers/validation.helper.js";
import AdminModel from "../../models/Admin.js";
import { createToken } from "../../helpers/common.helper.js"
class AdminAuthService {
    getAdmin = async (fields) => {
        try {
            const result = await AdminModel.findOne(fields);
            if (result) return { status: true, msg: "This Admin Already Exist!", data: result }
            else return { status: false, msg: "Admin Not Found" }
        } catch (error) {
            console.error({ getAdmin: error })
            return { status: true, msg: "Internal Server Error" };
        };
    };
    createAdmin = async (req_Body) => {
        try {
            const isValid = await checkCreationValues(req_Body, "admin");
            if (isValid.status) {
                const existAdmin = await this.getAdmin({ email: req_Body.email });
                if (!existAdmin.status) {
                    const data = await AdminModel.create(req_Body);
                    return { status: true, msg: "Admin Registered Successfully!", data };
                } else {
                    return { status: false, msg: existAdmin.msg };
                }
            } else {
                return { status: false, msg: isValid.message };
            };
        } catch (error) {
            console.error({ createAdmin: error });
            return { status: false, msg: "Internal Server Error" };
        };
    };
    loginAdmin = async (req_Body) => {
        try {
            if (req_Body == undefined) {
                return { status: false, msg: "email and password are required!" }
            };
            const { email, password } = req_Body;
            if (!email || !password) {
                return { status: false, msg: "email and password are required!" }
            };
            const existAdmin = await this.getAdmin({ email: req_Body.email });
            if (existAdmin) {
                if (existAdmin.data?.password === password) {
                    const token = await createToken({ adminId: existAdmin.data?._id });
                    return { status: true, msg: "Login Successfully", data: { token } };
                } else {
                    return { status: false, msg: "Invalid Password" };
                };
            } else {
                return { status: false, msg: existAdmin.msg };
            };
        } catch (error) {
            console.error({ loginAdmin: error });
            return { status: false, msg: "Internal Server Error" };
        };
    };
};

export default new AdminAuthService;