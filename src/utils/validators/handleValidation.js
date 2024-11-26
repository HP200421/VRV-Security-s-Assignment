import { validationResult } from "express-validator";
import { ValidationError } from "../ApiError.js";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));
    return next(new ValidationError(formattedErrors));
  }
  next();
};
