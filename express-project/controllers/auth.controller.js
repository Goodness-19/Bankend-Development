import * as authService from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const user = await authService.register(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const user = await authService.login(req.body);
  res.json({
    success: true,
    data: user,
  });
});

export { registerUser, login };
