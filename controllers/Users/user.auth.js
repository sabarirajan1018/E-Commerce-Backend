import UserAuthService from "../../service/Users/user.auth.service.js";
import { successResponse, errorResponse } from "../../helpers/response.helper.js";

class UserAuth {
    register = async (req, res) => {
        try {
            const result = await UserAuthService.createAUser(req.body);
            successResponse(res, result)
        } catch (error) {
            errorResponse(res, error)
        };
    }
};

export default new UserAuth;