import express from "express";
import { validateRegister } from "../middlewares/validateRegister.middleware.js";
import { validateLogin } from "../middlewares/validateLogin.middleware.js";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();

/* ---------------- AUTH ROUTES ---------------- */

// Register
router.post("/register", validateRegister, userController.registerUser);

// Login
router.post("/login", validateLogin, userController.loginUser);


/* ---------------- USER CRUD ROUTES ---------------- */

router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);

router.patch("/:id", userController.patchUser);

router.delete("/:id", userController.deleteUser);

export default router;