import "dotenv/config";
import express from 'express';
import userRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js'
import errorMiddleware from './middlewares/error.middleware.js';

// dotenv.config();


const app = express();
app.use(express.json()); // to enable our req.body

app.use(logger())

app.use("/auth", authRoutes)
app.use("/users", userRoutes);

// It must be the last middleware
app.use(errorMiddleware);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// Client (PostMan) - > Routes -> Controller -> Service -> Data (JSON File)
// SOLID Principles:
// S - Single Responsibility Principle
// O - Open/Closed Principle
// L - Liskov Substitution Principle
// I - Interface Segregation Principle
// D - Dependency Inversion Principle