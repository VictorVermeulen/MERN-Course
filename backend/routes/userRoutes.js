import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//these 2 do the same thing
//router.post("/login", authUser);
router.route("/login").post(authUser);

router.route("/profile").get(protect, getUserProfile);

router.route("/").post(registerUser);

export default router;
