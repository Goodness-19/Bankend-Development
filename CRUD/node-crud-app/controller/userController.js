const { v4: uuid } = require("uuid");
const userService = require("../services/userService");

exports.getUsers = (req, res) => {
  res.json({ success: true, data: userService.getAll() });
};

exports.createUser = (req, res) => {
  const user = {
    id: uuid(),
    name: req.body.name
  };
  userService.create(user);
  res.json({ success: true, data: user });
};
