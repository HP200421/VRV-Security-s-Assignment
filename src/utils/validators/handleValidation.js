import { validationResult } from "express-validator";
import { ValidationError } from "../ApiError";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ValidationError(errors.array()));
  next();
};
