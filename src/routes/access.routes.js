import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/authorizeRole.middleware.js";
import { validateUpdateUserRole } from "../utils/validators/auth.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import { updateUserRole } from "../controllers/access.controller.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const router = Router();
router.use(verifyJwt);

router
  .route("/update-user-role")
  .post(
    authorizeRole("admin"),
    validateUpdateUserRole,
    handleValidationErrors,
    updateUserRole
  );

router
  .route("/user")
  .get(authorizeRole("admin", "moderator", "user"), async (req, res) =>
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          req.user,
          "This is User route which can be accessed by user, moderator and admin"
        )
      )
  );

router
  .route("/moderator")
  .get(authorizeRole("admin", "moderator"), async (req, res) => {
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          req.user,
          "This is Moderator route which can be accessed by moderator and admin"
        )
      );
  });

router.route("/admin").get(authorizeRole("admin"), async (req, res) => {
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        req.user,
        "This is Admin route which can be accessed by admin"
      )
    );
});
export default router;
