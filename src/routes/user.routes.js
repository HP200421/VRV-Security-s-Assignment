import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getNewToken,
} from "../controllers/user.controller.js";
import { validateRegister, validateLogin } from "../utils/validators/auth.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/register")
  .post(validateRegister, handleValidationErrors, registerUser);

router.route("/login").post(validateLogin, handleValidationErrors, loginUser);

// Secured routes
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/refresh-token").get(getNewToken);

export default router;
