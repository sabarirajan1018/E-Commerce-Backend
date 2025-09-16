import AdminAuthService from "../../service/Admin/admin.auth.js";
import { successResponse, errorResponse } from "../../helpers/response.helper.js";

class AdminAuth {
    register = async (req, res) => {
        try {
            const result = await AdminAuthService.createAdmin(req.body);
            successResponse(res, result)
        } catch (error) {
            errorResponse(res, error)
        };
    };
    login = async (req, res) => {
        try {
            const result = await AdminAuthService.loginAdmin(req.body);
            successResponse(res, result)
        } catch (error) {
            errorResponse(res, error)
        };
    }
};

export default new AdminAuth;