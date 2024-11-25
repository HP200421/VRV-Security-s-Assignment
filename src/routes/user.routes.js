import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getNewToken,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// Secured routes

router.route("/logout").post(verifyJwt, logoutUser);
router.route("/refresh-token").get(getNewToken);

export default router;
