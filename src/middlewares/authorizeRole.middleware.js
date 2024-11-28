import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const authorizeRole = (...allowedRoles) =>
  asyncHandler(async (req, res, next) => {
    if (!allowedRoles.includes(req.user?.role)) {
      throw new ApiError(401, "You are not authorized to access this route");
    }
    next();
  });
