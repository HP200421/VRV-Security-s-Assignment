import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const updateUserRole = asyncHandler(async (req, res) => {
  const { userId, role } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.role = role;
  await user.save();

  const updatedUser = await User.findById(userId).select(
    "-password -refreshToken"
  );

  if (!updatedUser) {
    throw new ApiError(500, "Something went wrong while updating user role");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { updatedUser }, "User role updated successfully")
    );
});
