import { check } from "express-validator";

export const validateRegister = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  check("username").notEmpty().withMessage("User name is required"),
];

export const validateLogin = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

export const validateUpdateUserRole = [
  check("userId").isMongoId().withMessage("Invalid user id"),
  check("role")
    .isIn(["admin", "user", "moderator"])
    .withMessage("Invalid role"),
];
