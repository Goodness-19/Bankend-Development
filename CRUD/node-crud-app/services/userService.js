const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../repository/users.json");

const read = () => JSON.parse(fs.readFileSync(file, "utf-8"));
const write = (data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

exports.getAll = () => read();

exports.create = (user) => {
  const users = read();
  users.push(user);
  write(users);
  return user;
};
