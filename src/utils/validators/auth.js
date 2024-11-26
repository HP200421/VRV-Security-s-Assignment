import { check, body } from "express-validator";

// export const validateRegister = [
//   body("username", "Username is required").not().isEmpty(),
//   body("email", "Please include a valid email"),
//   body("password", "Password must be 8 or more characters").isLength({
//     min: 8,
//   }),
// ];

export const validateRegister = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  check("username").notEmpty().withMessage("Name is required"),
];

export const validateLogin = [
  body("email", "Please include a valid email").isEmail(),
  body("password", "Password is required"),
];
