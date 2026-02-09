import express from 'express';
import { validateUser } from '../middlewares/validateUser.js';
import * as userController from '../controllers/user.controller.js'

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById)
router.post("/", validateUser, userController.createUser);
router.put("/:id", userController.updateUser)
router.patch("/user/:id", userController.patchUser)
router.delete("/:id", userController.deleteUser)

export default router;
