import { body } from "express-validator";

export const validateRegister = [
  body("username", "Username is required").not().isEmpty(),
  body("email", "Please include a valid email"),
  body("password", "Password must be 8 or more characters").isLength({
    min: 8,
  }),
];

export const validateLogin = [
  body("email", "Please include a valid email").isEmail(),
  body("password", "Password is required"),
];
