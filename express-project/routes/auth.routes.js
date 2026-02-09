import express from 'express';
import * as authUser from '../controllers/auth.controller.js'

const router = express.Router();

router.post("/register", authUser.registerUser);
router.post("/login", authUser.login);

export default router;
