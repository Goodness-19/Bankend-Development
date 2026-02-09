import * as userService from "../services/user.service.js";
import asyncHandler from "../utils/asyncHandler.js";

const getUsers = asyncHandler(async (req, res, next) => {
  const users = await userService.getAll();
  res.json({
    success: true,
    data: users,
  });
});
// CRUD - Create, Read, Update, Delete

const createUser = asyncHandler(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  console.log(updated);

  if (!updated) {
    return res.status(404).json({
      success: false,
    });
  }
  return res.json({
    success: true,
    data: updated,
  });
});

const patchUser = asyncHandler(async (req, res) => {
  const updated = await userService.patchUser(req.params.id, req.body);
  console.log(updated);

  if (!updated) {
    return res.status(404).json({
      success: false,
    });
  }
  return res.json({
    success: true,
    data: updated,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const deleted = await userService.deleteUser(req.params.id);
  if (!deleted) {
    return res.status(404).json({
      success: false,
    });
  }
  res.status(204).json();
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found!",
    });
  }

  res.json({
    success: true,
    data: user,
  });
});

export { getUsers, createUser, updateUser, patchUser, deleteUser, getUserById };
