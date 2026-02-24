import "dotenv/config";
import express from "express";
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import logger from "./middlewares/logger.middleware.js"; // ✅ ADD THIS

const app = express();

app.use(express.json());
app.use(logger());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// Must be last
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});