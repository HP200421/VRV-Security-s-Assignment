import { errorResponse } from "../utils/ErrorResponse.js";
import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  if (
    err instanceof mongoose.Error.ValidationError ||
    err.name === "ValidationError"
  ) {
    const errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return errorResponse(
      res,
      { message: "Validation Error", errors: errors },
      400
    );
  }

  // Mongoose CastError (e.g., Invalid ObjectID)
  if (err instanceof mongoose.Error.CastError || err.name === "CastError") {
    return errorResponse(res, { message: "Invalid ID format" }, 400);
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    return errorResponse(
      res,
      { message: `Duplicate value for field: ${field}`, field, value },
      400
    );
  }

  // Custom Errors that i had defined => ApiError, ValidationError
  if (err.statusCode) {
    return errorResponse(
      res,
      { message: err.message, errors: err.errors || [] },
      err.statusCode
    );
  }

  // Fallback for Unhandled Errors
  return errorResponse(res, "Internal Server Error", 500);
};

export default errorHandler;
