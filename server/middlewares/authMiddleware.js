import { ApiError } from "../exceptions/ApiError.js";
import { tokenService } from "../services/TokenService.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(ApiError.UnauththorizedError());
    }

    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauththorizedError());
    }
    const userData = await tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.UnauththorizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnauththorizedError());
  }
};
