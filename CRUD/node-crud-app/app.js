const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
