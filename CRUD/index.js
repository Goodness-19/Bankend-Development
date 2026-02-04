import express from 'express';
import userRoutes from './routes/users.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';
import logger from './middlewares/logger.middleware.js';

const app = express();

app.use(express.json()); // to enable our req.body

// 🔹 Logger middleware (GLOBAL — must be before routes)
app.use(logger());

app.use("/users", userRoutes);

// 🔹 It must be the last middleware
app.use(errorMiddleware);

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
