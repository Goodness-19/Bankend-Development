import fs from "fs/promises";

const DATA_FILE = "./repository/users.json";

async function readData() {
  const data = await fs.readFile(DATA_FILE, "utf8");
  console.log(data);
  if (!data.trim()) {
    return [];
  }
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

const getAll = async () => {
  const users = await readData();
  return users;
};

const createUser = async (userData) => {
  const users = await readData();
  const date = new Date();
  const newUser = {
    id: Date.now(),
    ...userData,
    dateAdded: date.toISOString(),
  };
  users.push(newUser);
  await writeData(users);
  return newUser;
};

const updateUser = async (id, updates) => {
  const users = await readData();
  const index = users.findIndex((user) => user.id === Number(id));
  if (index === -1) return null;

  users[index] = {
    id: users[index].id,
    name: updates.name,
    age: updates.age,
    dateAdded: users[index].dateAdded,
  };
  await writeData(users);
  return users[index];
};

const patchUser = async (id, updates) => {
  const users = await readData();
  const index = users.findIndex((user) => user.id === Number(id));
  if (index === -1) return null;

  users[index] = { ...users[index], ...updates };
  await writeData(users);
  return users[index];
};

const deleteUser = async (id) => {
  const users = await readData();
  const filtered = users.filter((user) => user.id !== Number(id));
  if (users.length === filtered.length) return null;
  await writeData(filtered);
  return true;
};

const getUserById = async (id) => {
  const users = await readData();
  return users.find((user) => user.id === Number(id));
};

export { getAll, createUser, updateUser, patchUser, deleteUser, getUserById };
