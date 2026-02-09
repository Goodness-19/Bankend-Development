import fs from "fs/promises";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const DATA_FILE = "./repository/auth_users.json";

async function readData() {
  const data = await fs.readFile(DATA_FILE, "utf8");
  if (!data.trim()) {
    return [];
  }
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

async function register(userData) {
  const authUsers = await readData();

  const exists = authUsers.find(u => u.email === userData.email);
  if (exists) {
    throw new Error("user already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = {
    id: uuidv4(),
    email: userData.email,
    name: userData.name,
    password: hashedPassword,
    role: "user",
  };

  authUsers.push(newUser);
  await writeData(authUsers);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role
  };
}

async function login({ email, password}){
    const users = await readData();
    const user = users.find(u => u.email === email);
    if(!user){
        throw new Error("Invalid email or password");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
        throw new Error("Invalid email or password");
    }

    // login successful 
    const successUser = {
        id: user.id,
        name: user.name,
        email: user.email
    }
    //return successUser;
    const SECRET = process.env.JWT_SECRET;
    const token = jwt.sign(successUser, SECRET, {expiresIn: "1h"});

    return {token}
}

export { register, login };
